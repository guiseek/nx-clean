import { ProjectConfiguration, readJsonFile } from '@nx/devkit';
import { TSConfigBase } from '../interfaces';
import { getRootTsConfigPath } from '@nx/js';

export function getProjectImportPath({ sourceRoot }: ProjectConfiguration) {
  const { compilerOptions } = readJsonFile<TSConfigBase>(getRootTsConfigPath());

  return Object.keys(compilerOptions.paths).find((importPath) => {
    return compilerOptions.paths[importPath].find(
      (path) => path.indexOf(sourceRoot + '/index.ts') > -1
    );
  });
}
