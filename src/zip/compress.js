import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const destination = createWriteStream(`${__dirname}/files/archive.gz`);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            throw new Error('Error occurred. Please try again');
        }

        console.log('File has been compressed!');
    });
};

compress();
