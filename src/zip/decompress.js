import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

export const decompress = async () => {
    const unzip = createGunzip();

    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            throw new Error('Error occurred. Please try again');
        }

        console.log('File has been decompressed!');
    });
};

decompress();
