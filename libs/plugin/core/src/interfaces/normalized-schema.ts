import { GeneratorsConfig } from '../types';
import {
  GeneratorSchema,
  DataGeneratorSchema,
  DomainGeneratorSchema,
  PresentationGeneratorSchema,
} from './generator-schema';

export interface PluginCoreNormalizedSchema extends GeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  generators: GeneratorsConfig;
  parsedTags: string[];
}

export interface DomainPluginCoreNormalizedSchema
  extends PluginCoreNormalizedSchema,
    DomainGeneratorSchema {
  npmScope: string;
}

export interface DataPluginCoreNormalizedSchema
  extends DomainPluginCoreNormalizedSchema,
    DataGeneratorSchema {
  projectDomain: string;
}

export interface PresentationPluginCoreNormalizedSchema
  extends DataPluginCoreNormalizedSchema,
    PresentationGeneratorSchema {
  projectData: string;
}
