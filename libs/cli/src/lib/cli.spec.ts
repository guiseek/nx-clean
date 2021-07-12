import { run } from './cli';

describe('cli', () => {
  it('should work', () => {
    run('echo', ['oi'], (value) => {
      expect(value).toStrictEqual(`stdout: oi
      child process exited with code 0`);
    });
  });
});
