import { Worker } from 'node:worker_threads';
import os from 'node:os';

export const performCalculations = async () => {
    const numOfCPUs = os.cpus().length;
    const firstFibonacciNumber = 10;
    const computationResult = [];

    for (let i = 0; i < numOfCPUs; i++) {
        const worker = new Worker('./worker.js', { workerData: firstFibonacciNumber + i });

        worker.on('message', (result) => {
            computationResult[i] = {
                status: 'resolved',
                data: result,
            };
        });

        worker.on('error', () => {
            computationResult[i] = {
                status: 'error',
                data: null,
            };
        });

        worker.on('exit', (code) => {
            if (Object.keys(computationResult).length === numOfCPUs) {
                console.log(computationResult);
            }
        });
    }
};

performCalculations();
