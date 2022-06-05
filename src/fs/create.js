import { access, constants, writeFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
    const filePath = `${__dirname}/files/fresh.txt`;

    access(filePath, constants.F_OK, (err) => {
        if (null === err) {
            throw new Error('FS operation failed');
        }

        writeFile(filePath, 'I am fresh and young', (err) => {
            if (null !== err) {
                err.message = 'Write operation failed';

                throw err;
            }

            console.log('File has been created!');
        });
    });
};

create();
