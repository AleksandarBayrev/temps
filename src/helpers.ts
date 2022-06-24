import { ExecAsyncResult } from "./types";
export const getErrorMessage = (sensor: string) => `No data for ${sensor} found!`;
export const getCPUTemp = (x: ExecAsyncResult) => {
    return x.stdout.split('\n').find(x => x.includes('Tctl'))?.replace('\r', '').replace('Tctl:', '').replace('         ', '');
}
export const getGPUTemp = (x: ExecAsyncResult) => {
    return x.stdout.split('\n').find(x => x.indexOf('MiB') !== -1)?.split(' ').find(x => x.includes('C'));
}