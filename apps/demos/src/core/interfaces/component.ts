export abstract class Component {
  is?: string
  selector?: string

  template?: HTMLTemplateElement
  //   // new (params: HTMLTemplateElement): HTMLTemplateElement
  styles?: HTMLStyleElement
  //   // new (param: HTMLStyleElement): HTMLStyleElement
  observed?: string[]
  //   // new (...params: string[]): string[]
}