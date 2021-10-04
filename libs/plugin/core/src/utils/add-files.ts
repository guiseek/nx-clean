import { Tree, names, generateFiles, offsetFromRoot } from '@nrwl/devkit';
import {
  DataPluginCoreNormalizedSchema,
  DomainPluginCoreNormalizedSchema,
  PresentationPluginCoreNormalizedSchema,
} from '../interfaces';
import { join } from 'path';

export function addFiles(
  host: Tree,
  options: DomainPluginCoreNormalizedSchema,
  dir: string
);

export function addFiles(
  host: Tree,
  options: DataPluginCoreNormalizedSchema,
  dir: string
);

export function addFiles(
  host: Tree,
  options: PresentationPluginCoreNormalizedSchema,
  dir: string
) {
  const libNames = names(options.name);

  const templateOptions: Record<string, any> = {
    ...options,
    ...libNames,
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };

  if (options.entity) {
    const entity = names(options.entity);
    templateOptions.model = entity.fileName;
    templateOptions.entity = entity;
  }

  generateFiles(host, join(dir, 'files'), options.projectRoot, templateOptions);

  ['ts', 'spec.ts'].forEach((ext) => {
    const root = options.projectRoot;
    const filename = libNames.fileName;
    if (host.exists(`${root}/src/lib/${filename}.${ext}`)) {
      host.delete(`${root}/src/lib/${filename}.${ext}`);
    }
  });
}
