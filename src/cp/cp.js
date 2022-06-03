import { argv } from 'node:process';
import { spawn } from 'node:child_process';

export const spawnChildProcess = async (args) => {
    args = args.slice(2);
    args.unshift('./files/script.js');

    spawn('node', args, { stdio: 'inherit'});
};

spawnChildProcess(argv);
