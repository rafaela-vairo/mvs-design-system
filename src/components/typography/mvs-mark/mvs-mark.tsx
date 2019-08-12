import { Component, h } from '@stencil/core'

@Component({
  tag: 'mvs-mark',
  styleUrl: './mvs-mark.scss',
  shadow: true,
})
export class MvsMark {
  render() {
    return (
      <mark>
        <slot />
      </mark>
    )
  }
}
