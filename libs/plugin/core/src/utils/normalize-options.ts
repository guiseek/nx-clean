import {
  DomainGeneratorSchema,
  DataGeneratorSchema,
  PresentationGeneratorSchema,
  DomainPluginCoreNormalizedSchema,
  DataPluginCoreNormalizedSchema,
  PresentationPluginCoreNormalizedSchema,
} from '../interfaces';
import {
  Tree,
  names,
  getWorkspaceLayout,
  readWorkspaceConfiguration,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { GeneratorsConfig } from '../types';
import { getProjectImportPath } from './get-project-import-path';

export function normalizeOptions(
  host: Tree,
  options: DomainGeneratorSchema
): DomainPluginCoreNormalizedSchema;

export function normalizeOptions(
  host: Tree,
  options: DataGeneratorSchema
): DataPluginCoreNormalizedSchema;

export function normalizeOptions(
  host: Tree,
  options: PresentationGeneratorSchema
): PresentationPluginCoreNormalizedSchema;

export function normalizeOptions(host: Tree, options: any): unknown {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;

  const workspace = readWorkspaceConfiguration(host);

  const npmScope = workspace.npmScope;

  const generators = ((workspace.generators ?? {})['@nx-clean/plugin-core'] ?? {
    data: { injectable: options.injectable },
    domain: { injectable: options.injectable },
    presentation: { injectable: options.injectable },
    repository: { injectable: options.injectable },
  }) as GeneratorsConfig;

  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(host).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  options.injectable = options.injectable ? options.injectable : false;
  options.repository = options.repository ? options.repository : false;
  options.usecases = options.usecases ? options.usecases : false;
  options.inmemory = options.inmemory ? options.inmemory : false;

  if (options.domain) {
    const config = readProjectConfiguration(host, options.domain);
    options.projectDomain = config
      ? getProjectImportPath(config)
      : options.domain;
  }

  if (options.data) {
    const config = readProjectConfiguration(host, options.data);
    options.projectData = config ? getProjectImportPath(config) : options.data;
  }

  const normalized: PresentationPluginCoreNormalizedSchema = {
    ...options,
    generators,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    npmScope,
  };

  return normalized;
}
