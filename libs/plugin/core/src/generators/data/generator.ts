import { Tree, formatFiles, installPackagesTask } from '@nx/devkit';
import { addFiles, normalizeOptions } from '../../utils';
import { DataGeneratorSchema } from '../../interfaces';
import { libraryGenerator } from '@nx/js';

export default async function (host: Tree, options: DataGeneratorSchema) {
  const normalizedOptions = normalizeOptions(host, options);
  await libraryGenerator(host, normalizedOptions);

  if (options.entity) {
    addFiles(host, normalizedOptions, __dirname + '/files/default');
  }

  if (options.inmemory) {
    if (options.inmemory && !options.entity) {
      throw new Error('You need to add a entity');
    }

    addFiles(host, normalizedOptions, __dirname + '/files/inmemory');
  }

  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
