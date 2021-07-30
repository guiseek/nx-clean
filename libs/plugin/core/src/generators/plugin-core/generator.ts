import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  offsetFromRoot,
  getWorkspaceLayout,
  addProjectConfiguration,
  readWorkspaceConfiguration,
} from '@nrwl/devkit';
import * as path from 'path';
import { PluginCoreGeneratorSchema } from './schema';

interface NormalizedSchema extends PluginCoreGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
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
  addProjectConfiguration(host, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'library',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: '@nrwl/node:package',
        outputs: ['{options.outputPath}'],
        options: {
          outputPath: `dist/${normalizedOptions.projectRoot}`,
          main: `${normalizedOptions.projectRoot}/src/index.ts`,
          packageJson: `${normalizedOptions.projectRoot}/package.json`,
          tsConfig: `${normalizedOptions.projectRoot}/tsconfig.lib.json`,
          assets: [`${normalizedOptions.projectRoot}/*.md`],
        },
      },
    },
    tags: normalizedOptions.parsedTags,
  });

  addFiles(host, normalizedOptions);

  await formatFiles(host);
}
