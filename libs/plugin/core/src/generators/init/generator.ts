import { setDefaultCollection } from '@nx/workspace/src/utilities/set-default-collection';
import { runTasksInSerial } from '@nx/workspace/src/utilities/run-tasks-in-serial';
import { nxCleanCoreVersion, rxjsVersion } from '../../utils';
import { InitGeneratorSchema } from './schema';
import {
  Tree,
  formatFiles,
  installPackagesTask,
  addDependenciesToPackageJson,
  updateWorkspaceConfiguration,
  readWorkspaceConfiguration,
} from '@nx/devkit';

const nxCleanInitGenerator = async function (
  host: Tree,
  { injectable = true }: InitGeneratorSchema
) {
  setDefaults(host, { injectable });

  await formatFiles(host);

  return runTasksInSerial(updateDependencies(host), () => {
    installPackagesTask(host);
  });
};

function setDefaults(host: Tree, options: InitGeneratorSchema) {
  const workspace = readWorkspaceConfiguration(host);

  workspace.generators = workspace.generators || {};
  workspace.generators['@nx-clean/plugin-core'] = {
    data: { injectable: options.injectable },
    domain: { injectable: options.injectable },
    presentation: { injectable: options.injectable },
    repository: { injectable: options.injectable },
    ...(workspace.generators['@nx-clean/plugin-core'] || {}),
  };

  updateWorkspaceConfiguration(host, workspace);
  setDefaultCollection(host, '@nx-clean/plugin-core');
}

function updateDependencies(host: Tree) {
  const packages = {
    '@nx-clean/core': nxCleanCoreVersion,
    rxjs: rxjsVersion,
  };
  return addDependenciesToPackageJson(host, packages, {});
}

export default nxCleanInitGenerator;
