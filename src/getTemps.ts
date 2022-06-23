import { execAsync } from "./execAsync";

export const getTemps = async (): Promise<string[]> => {
    const temps: string[] = [];
    await execAsync('nvidia-smi').then(x => {
        const nvidiaTemp = x.stdout.split('\n').find(x => x.indexOf('MiB') !== -1)?.split(' ').find(x => x.includes('C'));
        temps.push(`GPU: ${nvidiaTemp}`);
    });
    await execAsync('sensors').then(x => {
        const cpuTemp = x.stdout.split('\n').find(x => x.includes('Tctl'));
        temps.push(`CPU: ${cpuTemp?.replace('\r', '')}`);
    });
    return temps;
}