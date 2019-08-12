import { Component, h } from '@stencil/core'

@Component({
  tag: 'mvs-strong',
  styleUrl: 'mvs-strong.scss',
  shadow: true,
})
export class MvsStrong {
  render() {
    return (
      <strong>
        <slot />
      </strong>
    )
  }
}
