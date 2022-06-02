import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';

export const write = async () => {
    const writeable = createWriteStream('./files/fileToWrite.txt');

    stdin.pipe(writeable);
};

write();
