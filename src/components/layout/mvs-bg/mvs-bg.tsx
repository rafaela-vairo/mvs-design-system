import { Component, h } from '@stencil/core'

@Component({
	tag: 'mvs-bg',
	styleUrl: 'mvs-bg.scss'
})
export class MvsBg {
	render() {
		return (
			<div class='alternating'>
				<slot />
			</div>
		)
	}
}
