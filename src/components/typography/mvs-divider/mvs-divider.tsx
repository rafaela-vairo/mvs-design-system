import { Component, h } from '@stencil/core'

@Component({
	tag: 'mvs-divider',
	styleUrl: 'mvs-divider.scss',
	shadow: true,
})
export class MvsDivider {
	render() {
		return <hr />
	}
}
