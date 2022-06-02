import { access, constants, rename as renameFile } from 'node:fs';

export const rename = async () => {
    const wrongFileNamePath = './files/wrongFilename.txt';
    const properFileNamePath = './files/properFilename.md';

    access(properFileNamePath, constants.F_OK, (err) => {
        if (null === err) {
            throw new Error('FS operation failed');
        }
    });

    renameFile(wrongFileNamePath, properFileNamePath, (err) => {
        if (null !== err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        if (null === err) {
            console.log('File was renamed');
        }
    });
};

rename();
