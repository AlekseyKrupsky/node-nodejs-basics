import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

export const read = async () => {
    const readableStream =  createReadStream('./files/fileToRead.txt');

    readableStream.pipe(stdout);
};

read();
