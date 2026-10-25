// Adapter for the supplied design's data calculations. All DOM rendering is Vue.
export class VueModel {
  constructor() { this.state = {} }
  setState(update) {
    const patch = typeof update === 'function' ? update(this.state) : update
    Object.assign(this.state, patch)
  }
}
