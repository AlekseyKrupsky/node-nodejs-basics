import { access, constants, cp } from 'node:fs';

export const copy = async () => {
    const sourceDir = './files';
    const destinationDir = './files_copy';

    access(destinationDir, constants.F_OK, (err) => {
        if (null === err) {
            throw new Error('FS operation failed.');
        }
    });

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
};

copy();
