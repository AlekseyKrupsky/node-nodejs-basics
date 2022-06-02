import { readFile } from 'node:fs';
import { createHash } from 'node:crypto';

export const calculateHash = async () => {
    readFile('./files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (null !== err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        const hash = createHash('sha256');
        hash.update(data);

        console.log(`Hex: ${hash.digest('hex')}`);
    });
};

calculateHash();
