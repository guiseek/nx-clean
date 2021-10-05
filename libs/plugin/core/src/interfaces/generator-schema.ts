export interface GeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
  injectable?: boolean;
}

export interface DomainGeneratorSchema extends GeneratorSchema {
  entity: string;
  repository?: boolean;
  usecases?: boolean;
}

export interface DataGeneratorSchema extends GeneratorSchema {
  entity: string;
  domain: string;
  inmemory?: boolean;
}

export interface PresentationGeneratorSchema extends GeneratorSchema {
  entity: string;
  domain: string;
  data: string;
}
