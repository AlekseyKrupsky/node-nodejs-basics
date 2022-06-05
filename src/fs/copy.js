import { access, constants, cp } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
    const sourceDir = `${__dirname}/files`;
    const destinationDir = `${__dirname}/files_copy`;

    access(destinationDir, constants.F_OK, (err) => {
        if (null === err) {
            throw new Error('FS operation failed.');
        }

        const options = {
            recursive: true,
        };

        cp(sourceDir, destinationDir, options, (err) => {
            if (null !== err && err.code === 'ENOENT') {
                throw new Error('FS operation failed.');
            }

            if (null === err) {
                console.log('Files were copies successful');
            }
        });
    });
};

copy();
