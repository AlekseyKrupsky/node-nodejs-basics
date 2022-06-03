import { access, constants, writeFile } from 'node:fs';

export const create = async () => {
    const filePath = './files/fresh.txt';

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
