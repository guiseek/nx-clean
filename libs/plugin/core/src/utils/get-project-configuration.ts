import { ProjectConfiguration } from '@nrwl/devkit';
import { PluginCoreNormalizedSchema } from '../interfaces';

export function getProjectConfiguration<T extends PluginCoreNormalizedSchema>(
  normalizedOptions: T,
): ProjectConfiguration & { tags: string[] } {
  return {
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
  }
}
