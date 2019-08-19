import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-navbutton',
	styleUrl: 'mvs-navbutton.scss',
	shadow: true,
})
export class MvsNavbutton {
	@Prop({ reflect: true }) disabled: boolean = false
	@Prop({ reflect: true }) type: string = 'button'
	@Prop() color: 'primary' | 'white' | 'black'
	render() {
		return (
			<button class={this.color} type={this.type} disabled={this.disabled}>
				<slot />
			</button>
		)
	}
}
