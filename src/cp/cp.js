import { argv } from 'node:process';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
    args = args.slice(2);
    args.unshift(`${__dirname}/files/script.js`);

    spawn('node', args, { stdio: 'inherit'});
};

spawnChildProcess(argv);
