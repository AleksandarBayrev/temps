import * as process from 'child_process';
import { ExecAsyncResult } from './types';

export const execAsync = async (command: string): Promise<ExecAsyncResult> => {
    return await new Promise((resolve, reject) => {
        process.exec(command, (error, stdout, stderr) => {
            resolve({
                error,
                stderr,
                stdout
            });
        });
    });
}