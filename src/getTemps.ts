import { StoreKeys } from "./constants";
import { execAsync } from "./execAsync";
import { getGPUTemp, getCPUTemp, getErrorMessage } from "./helpers";
import { temps } from "./store";
import { TempsResult } from "./types";

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