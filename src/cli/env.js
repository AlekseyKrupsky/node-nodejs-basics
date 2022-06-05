import process from 'node:process';

export const parseEnv = () => {
    let rssVariables = [];


    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            rssVariables.push(`${key}=${value}`);
        }
    }

    if (rssVariables.length !== 0) {
        console.log(rssVariables.join('; '));
    } else {
        console.log('Can\'t find any variable with RSS_ prefix');
    }
};

parseEnv();
