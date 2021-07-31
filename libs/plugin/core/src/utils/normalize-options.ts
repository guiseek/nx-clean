import { GeneratorSchema, PluginCoreNormalizedSchema } from '../interfaces';
import { getWorkspaceLayout, names, readWorkspaceConfiguration, Tree } from "@nrwl/devkit";

export function normalizeOptions<T extends GeneratorSchema>(host: Tree, options: T): PluginCoreNormalizedSchema {
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

  const normalized: PluginCoreNormalizedSchema = {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    npmScope,
  }

  if (options.project) {
    normalized.projectCore = options.project.replace('-', '/');
  }

  if (options.domain) {
    normalized.projectDomain = options.domain.replace('-', '/');
  }

  if (options.data) {
    normalized.projectData = options.data.replace('-', '/');
  }

  return normalized;
}
