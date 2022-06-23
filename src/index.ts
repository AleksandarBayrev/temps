import { execAsync } from './execAsync';
import { getTemps } from './getTemps';
import { printTemps } from './printTemps';

console.log('Temps');

(async() => {
    if (process.argv.includes('--loop')) {
        setInterval(async () => {
            console.clear();
            printTemps(await getTemps());
        }, 1000);
    }
    console.clear();
    printTemps(await getTemps());
})();