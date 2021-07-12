import { spawn } from 'child_process';

export function run<R>(
  command: string,
  options?: string[],
  callback?: (value: R) => void
) {
  const runner = spawn(command, options);

  runner.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    if (callback) callback(data);
  });

  runner.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  runner.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
