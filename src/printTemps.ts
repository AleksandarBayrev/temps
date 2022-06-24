import { TempsResult } from "./types";

export const printTemps = (temps: TempsResult, printCurrentTime: boolean) => {
    if (printCurrentTime) {
        console.log(new Date().toISOString());
    }
    Object.keys(temps).map((x: any) => console.log(`${temps[x as keyof TempsResult]}`));
}