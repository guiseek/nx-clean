import {
  Tree,
  names,
  generateFiles,
  offsetFromRoot,
  readProjectConfiguration,
  readWorkspaceConfiguration,
} from '@nrwl/devkit';
import { join } from 'path';
import {
  ImplRepositoryGeneratorSchema,
  NormalizedSchema,
  RepositoryGeneratorSchema,
  TemplateOptions,
} from './schema';

export default function (host: Tree, options: RepositoryGeneratorSchema): void;

export default function (
  host: Tree,
  options: ImplRepositoryGeneratorSchema
): void {
  const normalizedOptions = normalizeOptions(host, options);

  if (options.name && options.domain) {
    const domain = readProjectConfiguration(host, options.domain);

    addFiles(
      host,
      normalizedOptions,
      __dirname + '/files/domain',
      domain.sourceRoot
    );
  }

  if (options.impl && options.data) {
    if (!options.name) {
      throw new Error('You need to add a name');
    }

    const data = readProjectConfiguration(host, options.data);

    addFiles(
      host,
      normalizedOptions,
      __dirname + '/files/data',
      data.sourceRoot
    );
  }
}

function normalizeOptions(
  host: Tree,
  options: ImplRepositoryGeneratorSchema
): NormalizedSchema {
  const npmScope = readWorkspaceConfiguration(host).npmScope;
  const projectDomain = options.domain;
  const projectData = options.data;
  return {
    ...options,
    projectDomain,
    projectData,
    npmScope,
  };
}

function addFiles(
  host: Tree,
  options: NormalizedSchema,
  dir: string,
  target: string
) {
  const entity = names(options.name);

  const templateOptions: TemplateOptions = {
    ...options,
    ...names(options.name),
    model: entity.fileName,
    offsetFromRoot: offsetFromRoot(target),
    template: '',
    entity,
  };

  generateFiles(host, join(dir, 'files'), target, templateOptions);
}
