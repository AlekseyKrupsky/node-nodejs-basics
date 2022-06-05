import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const writeable = createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    stdin.pipe(writeable);
};

write();
