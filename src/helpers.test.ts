import { getCPUTemp, getErrorMessage, getGPUTemp } from "./helpers";

describe('helpers', () => {
    describe('getErrorMessage', () => {
        it('getErrorMessage returns correct message', () => {
            expect(getErrorMessage('CPU')).toEqual('No data for CPU found!')
        });
    });
    describe('getCPUTemp', () => {
        it('getCPUTemp returns correct message', () => {
            expect(getCPUTemp({stdout: '\nTctl:         50*C', error: null, stderr: ''})).toEqual('50*C')
        });
    });
    describe('getGPUTemp', () => {
        it('getGPUTemp returns correct message', () => {
            expect(getGPUTemp({stdout: '\n1MiB 45*C', error: null, stderr: ''})).toEqual('45*C')
        });
    });
});