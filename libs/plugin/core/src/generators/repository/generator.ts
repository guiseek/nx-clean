import {
  Tree,
  names,
  generateFiles,
  offsetFromRoot,
  readProjectConfiguration,
  readWorkspaceConfiguration,
} from '@nrwl/devkit';
import { join } from 'path';
import { getProjectImportPath } from '../../utils/get-project-import-path';
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

    const { model } = addFiles(
      host,
      normalizedOptions,
      __dirname + '/files/domain',
      domain.sourceRoot
    );

    const contents = host.read(domain.sourceRoot + '/index.ts');
    host.write(
      domain.sourceRoot + '/index.ts',
      contents.toString() +
        `
export * from './lib/entity/${model}.entity';
export * from './lib/repository/${model}.repository';
`
    );
  }

  if (options.impl && options.data) {
    if (!options.name) {
      throw new Error('You need to add a name');
    }

    if (!options.type) {
      throw new Error('You need to add a type of repository');
    }

    const data = readProjectConfiguration(host, options.data);

    const { model, format } = addFiles(
      host,
      normalizedOptions,
      __dirname + '/files/data',
      data.sourceRoot
    );

    const contents = host.read(data.sourceRoot + '/index.ts');
    host.write(
      data.sourceRoot + '/index.ts',
      contents.toString() +
        `
export * from './lib/${format}/${model}.${format}.repository';
export * from './lib/${format}/mapper/${model}-${format}.mapper';
export * from './lib/${format}/dto/${model}-${format}.dto';
`
    );
  }
}

function normalizeOptions(
  host: Tree,
  options: ImplRepositoryGeneratorSchema
): NormalizedSchema {
  const npmScope = readWorkspaceConfiguration(host).npmScope;
  const format = names(options.type).fileName;

  const configDomain = readProjectConfiguration(host, options.domain);
  const projectDomain = configDomain
    ? getProjectImportPath(configDomain)
    : options.domain;

  const configData = readProjectConfiguration(host, options.domain);
  const projectData = configData
    ? getProjectImportPath(configData)
    : options.data;

  return {
    ...options,
    projectDomain,
    projectData,
    npmScope,
    format,
  };
}

function addFiles(
  host: Tree,
  options: NormalizedSchema,
  dir: string,
  target: string
) {
  const entity = names(options.name);
  const type = names(options.type);

  const templateOptions: TemplateOptions = {
    ...options,
    ...names(options.name),
    model: entity.fileName,
    offsetFromRoot: offsetFromRoot(target),
    template: '',
    entity,
    type,
  };

  generateFiles(host, join(dir, 'files'), target, templateOptions);

  return templateOptions;
}
