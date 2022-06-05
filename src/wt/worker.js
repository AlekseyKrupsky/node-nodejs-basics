import { parentPort, workerData, isMainThread } from 'node:worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const result = nthFibonacci(workerData);

    //Use line below to test error case
    //if (workerData === 11) throw Error('Test error!');

    parentPort.postMessage(result);
};

if (!isMainThread) {
    sendResult();
}
