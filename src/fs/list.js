import { readdir } from 'node:fs';

export const list = async () => {
    readdir('./files', (err, files) => {
        if (null !== err) {
            throw new Error('FS operation failed.');
        }

        console.log(files);
    });
};

list();
