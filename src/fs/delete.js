import { rm } from 'node:fs';

export const remove = async () => {
    const filePathToDelete = './files/fileToRemove.txt';

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
