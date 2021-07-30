import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  offsetFromRoot,
  getWorkspaceLayout,
  installPackagesTask,
  readWorkspaceConfiguration,
} from '@nrwl/devkit';
import * as path from 'path';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { DomainGeneratorSchema } from './schema';

interface NormalizedSchema extends DomainGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  projectCore: string;
  parsedTags: string[];
  npmScope: string;
}

export function normalizeOptions(
  host: Tree,
  options: DomainGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const npmScope = readWorkspaceConfiguration(host).npmScope;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(host).libsDir}/${projectDirectory}`;
  const projectCore = options.project.replace('-','/');
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    projectCore,
    parsedTags,
    npmScope,
  };
}

function addFiles(host: Tree, options: NormalizedSchema) {
  const entity = names(options.entity)
  const templateOptions = {
    ...options,
    ...names(options.name),
    model: entity.fileName,
    entity,
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

export default async function (host: Tree, options: DomainGeneratorSchema) {
  const normalizedOptions = normalizeOptions(host, options);
  await libraryGenerator(host, normalizedOptions);

  addFiles(host, normalizedOptions);
  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
