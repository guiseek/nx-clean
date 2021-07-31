import { GeneratorSchema } from './generator-schema';
export interface PluginCoreNormalizedSchema extends GeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  projectDomain?: string;
  projectData?: string;
  projectCore?: string;
  parsedTags: string[];
  npmScope?: string;
}
