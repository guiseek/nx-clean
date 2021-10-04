export interface DomainGeneratorSchema {
    name: string;
    entity: string;
    
    repository?: boolean;
    usecases?: boolean;

    tags?: string;
    directory?: string;
}
