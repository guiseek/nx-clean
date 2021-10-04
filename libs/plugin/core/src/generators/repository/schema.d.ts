export interface RepositoryGeneratorSchema {
  name: string;
  domain: string;
  impl?: boolean;
}

export interface ImplRepositoryGeneratorSchema extends RepositoryGeneratorSchema {
  impl: boolean;
  data: string;
}

export interface NormalizedSchema extends RepositoryGeneratorSchema {
  projectDomain: string;
  projectData: string;
  npmScope: string;
}

export interface Names {
  name: string;
  className: string;
  propertyName: string;
  constantName: string;
  fileName: string;
}

export interface TemplateOptions extends NormalizedSchema, Names {
  offsetFromRoot: string;
  entity: Names;
  model: string;
  template: string;
}
