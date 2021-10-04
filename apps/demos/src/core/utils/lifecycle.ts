import { noop } from './noop'

export const lifecycle = {
  conn: (target: CustomElementConstructor) => {
    return target.prototype.connectedCallback ?? noop
  },

  disconn: (target: CustomElementConstructor) => {
    return target.prototype.disconnectedCallback ?? noop
  },
  attr: (target: CustomElementConstructor) => {
    return target.prototype.attributeChangedCallback ?? noop
  },
}