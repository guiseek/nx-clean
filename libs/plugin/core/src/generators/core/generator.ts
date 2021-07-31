import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  offsetFromRoot,
  getWorkspaceLayout,
  installPackagesTask,
  readWorkspaceConfiguration,
  readProjectConfiguration,
} from '@nrwl/devkit';
import * as path from 'path';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { PluginCoreGeneratorSchema } from './schema';

interface NormalizedSchema extends PluginCoreGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  buildable: boolean;
  parsedTags: string[];
  npmScope: string;
}

function normalizeOptions(
  host: Tree,
  options: PluginCoreGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const npmScope = readWorkspaceConfiguration(host).npmScope;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(host).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    buildable: true,
    parsedTags,
    npmScope,
  };
}

function addFiles(host: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };

  generateFiles(
    host,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (host: Tree, options: PluginCoreGeneratorSchema) {
  const normalizedOptions = normalizeOptions(host, options);
  await libraryGenerator(host, normalizedOptions);

  addFiles(host, normalizedOptions);
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
