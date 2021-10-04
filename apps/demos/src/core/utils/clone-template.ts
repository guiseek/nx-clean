export function cloneTemplate(template: HTMLTemplateElement) {
  return template.content.cloneNode(true) as HTMLElement
}