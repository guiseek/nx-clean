export type Generator = 'data' | 'domain' | 'presentation' | 'repository';

export type GeneratorsConfig = {
  [K in Generator]: {
    injectable: boolean;
  };
};
