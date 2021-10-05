import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { PresentationGeneratorSchema } from '../../interfaces';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { addFiles, normalizeOptions } from '../../utils';

export default async function (
  host: Tree,
  options: PresentationGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(
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
