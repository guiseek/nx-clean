export interface TSConfigBase {
  compileOnSave: boolean;
  compilerOptions: CompilerOptions;
  exclude: string[];
}

export interface CompilerOptions {
  rootDir: string;
  sourceMap: boolean;
  declaration: boolean;
  moduleResolution: string;
  emitDecoratorMetadata: boolean;
  experimentalDecorators: boolean;
  importHelpers: boolean;
  target: string;
  module: string;
  lib: string[];
  skipLibCheck: boolean;
  skipDefaultLibCheck: boolean;
  baseUrl: string;
  paths: Paths;
}

export type Paths = Record<string, string[]>;