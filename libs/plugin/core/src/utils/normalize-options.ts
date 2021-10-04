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
} from '@nrwl/devkit';

export function normalizeOptions<T extends DomainGeneratorSchema>(
  host: Tree,
  options: T
): DomainPluginCoreNormalizedSchema;
export function normalizeOptions<T extends DataGeneratorSchema>(
  host: Tree,
  options: T
): DataPluginCoreNormalizedSchema;
export function normalizeOptions<T extends PresentationGeneratorSchema>(
  host: Tree,
  options: T
): PresentationPluginCoreNormalizedSchema {
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


  options.repository = options.repository ? options.repository : false;
  options.usecases = options.usecases ? options.usecases : false;
  options.inmemory = options.inmemory ? options.inmemory : false;

  const normalized: PresentationPluginCoreNormalizedSchema = {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    projectDomain: '',
    projectData: '',
    parsedTags,
    npmScope,
  };

  if (options.domain) {
    (normalized as DataPluginCoreNormalizedSchema).projectDomain =
      options.domain.replace(new RegExp('-', 'g'), '/');
  }

  if (options.data) {
    (normalized as PresentationPluginCoreNormalizedSchema).projectData =
      options.data.replace(new RegExp('-', 'g'), '/');
  }

  return normalized;
}
