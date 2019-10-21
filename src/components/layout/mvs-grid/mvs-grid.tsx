import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-grid',
	styleUrl: 'mvs-grid.scss',
	shadow: true,
})
export class MvsGrid {
	@Prop() marginzero: boolean
	render() {
		let setmargin = this.marginzero ? ' margin-zero' : ''
		let setclass = 'container' + setmargin
		return (
			<div class={setclass}>
				<slot />
			</div>
		)
	}
}
