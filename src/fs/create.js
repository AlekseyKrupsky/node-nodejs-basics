import { access, constants, writeFile } from 'node:fs';

export const create = async () => {
    const filePath = './files/fresh.txt';

    access(filePath, constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    });

    writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
            err.message = 'Write operation failed';

            throw err;
        }
    });
};

create();
