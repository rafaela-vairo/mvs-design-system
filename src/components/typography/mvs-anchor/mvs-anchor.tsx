import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-anchor',
	styleUrl: 'mvs-anchor.scss',
	shadow: true
})
export class MvsAnchor {
	@Prop() href: string
	render() {
		return (
			<a href={this.href}>
				<slot />
			</a>
		)
	}
}
