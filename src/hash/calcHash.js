import { readFile } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    readFile(`${__dirname}/files/fileToCalculateHashFor.txt`, 'utf8', (err, data) => {
        if (null !== err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        const hash = createHash('sha256');
        hash.update(data);

        console.log(`Hex: ${hash.digest('hex')}`);
    });
};

calculateHash();
