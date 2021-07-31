import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { addFiles, normalizeOptions } from '../../utils';
import { DataGeneratorSchema } from './schema';

export default async function (host: Tree, options: DataGeneratorSchema) {
  const normalizedOptions = normalizeOptions(host, options);
  await libraryGenerator(host, normalizedOptions);

  addFiles(host, normalizedOptions, __dirname);
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
