export interface GeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
}

export interface DomainGeneratorSchema extends GeneratorSchema {
  entity?: string;
  domain?: string;
  repository?: boolean;
  usecases?: boolean;
}

export interface DataGeneratorSchema extends DomainGeneratorSchema {
  inmemory?: boolean;
}

export interface PresentationGeneratorSchema extends DataGeneratorSchema {
  data?: string;
}
