import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { addFiles, normalizeOptions } from '../../utils';
import { PresentationGeneratorSchema } from './schema';

export default async function (
  host: Tree,
  options: PresentationGeneratorSchema
) {
  const normalizedOptions = normalizeOptions<PresentationGeneratorSchema>(
    host,
    options
  );
  await libraryGenerator(host, normalizedOptions);

  addFiles(host, normalizedOptions, __dirname);
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
