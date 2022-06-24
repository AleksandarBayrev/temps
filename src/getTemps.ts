import { StoreKeys } from "./constants";
import { execAsync } from "./execAsync";
import { temps } from "./store";
import { ExecAsyncResult, TempsResult } from "./types";

const getErrorMessage = (sensor: string) => `No data for ${sensor} found!`;

const getCPUTemp = (x: ExecAsyncResult) => {
    return x.stdout.split('\n').find(x => x.includes('Tctl'))?.replace('\r', '').replace('Tctl:', '').replace('         ', '');
}

const getGPUTemp = (x: ExecAsyncResult) => {
    return x.stdout.split('\n').find(x => x.indexOf('MiB') !== -1)?.split(' ').find(x => x.includes('C'));
}

export const getTemps = async (): Promise<TempsResult> => {
    await execAsync('nvidia-smi').then(x => {
        temps.set(StoreKeys.GPU, `GPU: ${getGPUTemp(x)}`);
    });
    await execAsync('sensors').then(x => {
        temps.set(StoreKeys.CPU, `CPU: ${getCPUTemp(x)}`);
    });
    return {
        cpu: temps.get(StoreKeys.CPU) ?? getErrorMessage('CPU'),
        gpu: temps.get(StoreKeys.GPU) ?? getErrorMessage('GPU')
    };
}