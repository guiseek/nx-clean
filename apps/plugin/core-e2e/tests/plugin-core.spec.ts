import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('plugin-core e2e', () => {
  it('should create plugin-core', async () => {
    const plugin = uniq('plugin-core');
    ensureNxProject('@nx-clean/core', 'dist/libs/plugin/core');
    await runNxCommandAsync(`generate @nx-clean/core:plugin-core ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');
  }, 120000);

  describe('--directory', () => {
    it('should create src in the specified directory', async () => {
      const plugin = uniq('plugin-core');
      ensureNxProject('@nx-clean/core', 'dist/libs/plugin/core');
      await runNxCommandAsync(
        `generate @nx-clean/core:plugin-core ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
    }, 120000);
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async () => {
      const plugin = uniq('plugin-core');
      ensureNxProject('@nx-clean/core', 'dist/libs/plugin/core');
      await runNxCommandAsync(
        `generate @nx-clean/core:plugin-core ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
    }, 120000);
  });
});
