import { readdir } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    readdir(`${__dirname}/files`, (err, files) => {
        if (null !== err) {
            throw new Error('FS operation failed.');
        }

        console.log(files);
    });
};

list();
