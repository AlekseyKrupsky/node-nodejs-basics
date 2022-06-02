import process from 'node:process';

export const parseEnv = () => {
    let rssVariables = [];


    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            rssVariables.push(`${key}=${value}`);
        }
    }

    console.log(rssVariables.join('; '));
};

parseEnv();
