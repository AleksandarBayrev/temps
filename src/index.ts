import { execAsync } from './execAsync';

console.log('Temps');

(async() => {
    await execAsync('nvidia-smi').then(x => {
        const nvidiaTemp = x.stdout.split('\n').find(x => x.indexOf('MiB') !== -1)?.split(' ').find(x => x.includes('C'));
        console.log(`GPU: ${nvidiaTemp}`);
    });
    await execAsync('sensors').then(x => {
        const cpuTemp = x.stdout.split('\n').find(x => x.includes('Tctl'));
        console.log(`CPU: ${cpuTemp?.replace('\r', '')}`);
    });
})();