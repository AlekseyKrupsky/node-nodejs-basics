import { access, constants, rename as renameFile } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    const wrongFileNamePath = `${__dirname}/files/wrongFilename.txt`;
    const properFileNamePath = `${__dirname}/files/properFilename.md`;

    access(properFileNamePath, constants.F_OK, (err) => {
        if (null === err) {
            throw new Error('FS operation failed');
        }

        renameFile(wrongFileNamePath, properFileNamePath, (err) => {
            if (null !== err && err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }

            if (null === err) {
                console.log('File was renamed');
            }
        });
    });
};

rename();
