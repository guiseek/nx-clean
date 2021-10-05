import { ProjectConfiguration, readJsonFile } from '@nrwl/devkit';
import { TSConfigBase } from '../interfaces';

export function getProjectImportPath({ sourceRoot }: ProjectConfiguration) {
  const { compilerOptions } = readJsonFile<TSConfigBase>('tsconfig.base.json');

  return Object.keys(compilerOptions.paths).find((importPath) => {
    return compilerOptions.paths[importPath].filter(
      (path) => path.indexOf(sourceRoot) > -1
    );
  });
}
