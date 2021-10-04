export interface ElementOptions {
  selector: string;
}

export interface AutonomousOptions extends ElementOptions, ShadowRootInit {}

export interface BuiltInOptions
  extends ElementOptions,
    ElementDefinitionOptions {}
