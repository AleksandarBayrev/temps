import * as process from 'child_process';

export type ExecAsyncResult = {
    error: process.ExecException | null
    stdout: string
    stderr: string
}

export type TempsResult = {
    cpu: string;
    gpu: string;
}