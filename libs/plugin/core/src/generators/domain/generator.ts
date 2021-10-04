import { normalizeOptions, addFiles, nxCleanCoreVersion, rxjsVersion } from '../../utils';
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { DomainGeneratorSchema } from '../../interfaces';
import {
  Tree,
  formatFiles,
  installPackagesTask,
  addDependenciesToPackageJson,
} from '@nrwl/devkit';

export default async function (host: Tree, options: DomainGeneratorSchema) {
  const normalizedOptions = normalizeOptions(host, options);
  await libraryGenerator(host, normalizedOptions);

  if (options.entity) {
    addFiles(host, normalizedOptions, __dirname + '/files/default');
  }

  if (options.repository) {
    if (options.repository && !options.entity) {
      throw new Error('You need to add a entity');
    }

    addFiles(host, normalizedOptions, __dirname + '/files/repository');
  }

  if (options.usecases) {
    if (options.usecases && !options.repository) {
      throw new Error('You need to add a repository');
    }

    addFiles(host, normalizedOptions, __dirname + '/files/usecase');
  }

  await formatFiles(host);

  return runTasksInSerial(updateDependencies(host), () => {
    installPackagesTask(host);
  });
}

function updateDependencies(host: Tree) {
  const packages = {
    '@nx-clean/core': nxCleanCoreVersion,
    'rxjs': rxjsVersion
  };
  return addDependenciesToPackageJson(host, packages, {});
}
