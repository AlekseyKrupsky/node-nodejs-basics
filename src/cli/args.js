import { argv } from 'node:process';

export const parseArgs = () => {
    const propPrefix = '--';

    let argumentsString = [];

    argv.forEach((value, index) => {
        if (value.startsWith(propPrefix)) {
            if (argv[index + 1] !== undefined && !argv[index + 1].startsWith(propPrefix)) {
                const propName = value.replace(propPrefix, '');

                argumentsString.push(`${propName} is ${argv[index + 1]}`)
            } else {
                console.log(`Argument ${value} doesn\'t have value`);
            }
        }
    });

    console.log(argumentsString.join(', '));
};

parseArgs();
