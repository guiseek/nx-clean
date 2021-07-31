import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { normalizeOptions, addFiles } from '../../utils';
import { DomainGeneratorSchema } from './schema';


export default async function (host: Tree, options: DomainGeneratorSchema) {
  const normalizedOptions = normalizeOptions(host, options);
  await libraryGenerator(host, normalizedOptions);

  addFiles(host, normalizedOptions, __dirname);
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
