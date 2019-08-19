import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-shape',
	styleUrl: 'mvs-shape.scss',
	shadow: true,
})
export class MvsShape {
	@Prop() bg:
		| 'primary'
		| 'secondary'
		| 'black'
		| 'dark'
		| 'light'
		| 'white'
		| 'error'
		| 'warning'
		| 'confirm' = 'white'
	render() {
		return (
			<div class={this.bg}>
				<slot />
			</div>
		)
	}
}
