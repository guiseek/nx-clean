import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  offsetFromRoot,
  installPackagesTask,
} from '@nrwl/devkit';
import * as path from 'path';
import { normalizeOptions } from '../../utils';
import { PresentationGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { PluginCoreNormalizedSchema } from '../../interfaces';

function addFiles(host: Tree, options: PluginCoreNormalizedSchema) {
  const entity = names(options.entity)
  const templateOptions = {
    ...options,
    ...names(options.name),
    model: entity.fileName,
    entity,
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: ''
  };
  generateFiles(host, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
}

export default async function (host: Tree, options: PresentationGeneratorSchema) {
  const normalizedOptions = normalizeOptions<PresentationGeneratorSchema>(host, options);
  await libraryGenerator(host, normalizedOptions);

  addFiles(host, normalizedOptions);
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
