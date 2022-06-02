import { readFile } from 'node:fs';

export const read = async () => {
    readFile('./files/fileToRead.txt', 'utf8', (err, data) => {
        if (null !== err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        console.log(data);
    });
};

read();
