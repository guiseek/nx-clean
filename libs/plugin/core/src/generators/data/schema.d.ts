export interface DataGeneratorSchema {
    name: string;
    entity: string;
    domain: string;
    inmemory?: boolean;
    tags?: string;
    directory?: string;
}
