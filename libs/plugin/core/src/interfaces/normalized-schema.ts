import { GeneratorSchema } from './generator-schema';
export interface PluginCoreNormalizedSchema extends GeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  projectDomain?: string;
  projectData?: string;
  parsedTags: string[];
  npmScope?: string;
}
