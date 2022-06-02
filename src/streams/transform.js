import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

export const transform = async () => {
    const reverseText = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    stdin.pipe(reverseText).pipe(stdout);
};

transform();
