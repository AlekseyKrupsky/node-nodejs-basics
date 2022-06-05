import { rm } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    const filePathToDelete = `${__dirname}/files/fileToRemove.txt`;

    rm(filePathToDelete, (err) => {
        if (null !== err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        if (null === err) {
            console.log('File was removed');
        }
    });
};

remove();
