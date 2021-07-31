import { generateFiles, names, offsetFromRoot, Tree } from "@nrwl/devkit";
import { PluginCoreNormalizedSchema } from "../interfaces";
import { join } from 'path';

export function addFiles(host: Tree, options: PluginCoreNormalizedSchema, dir: string) {
  let templateOptions: Record<string, any> = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };

  if (options.entity) {
    const entity = names(options.entity)
    templateOptions.model = entity.fileName
    templateOptions.entity = entity
  }

  generateFiles(
    host,
    join(dir, 'files'),
    options.projectRoot,
    templateOptions
  );
}
