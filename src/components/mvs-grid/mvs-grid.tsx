import { Component, h } from '@stencil/core'

@Component({
	tag: 'mvs-grid',
	styleUrl: 'mvs-grid.scss',
	shadow: true,
})
export class MvsGrid {
	render() {
		return (
			<div class='container'>
				<slot />
			</div>
		)
	}
}
