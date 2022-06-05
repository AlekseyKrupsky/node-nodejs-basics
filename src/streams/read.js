import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const readableStream =  createReadStream(`${__dirname}/files/fileToRead.txt`);

    readableStream.pipe(stdout);
};

read();
