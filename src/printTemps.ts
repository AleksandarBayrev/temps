export const printTemps = (temps: string[], printCurrentTime: boolean) => {
    if (printCurrentTime) {
        console.log(new Date().toISOString());
    }
    temps.map(x => console.log(`${x}`));
}