import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-navbutton',
	styleUrl: 'mvs-navbutton.scss',
	shadow: true,
})
export class MvsNavbutton {
	@Prop({ reflect: true }) disabled: boolean = false
	@Prop({ reflect: true }) type: string = 'button'
	@Prop() contained: boolean = false
	@Prop() outlined: boolean = false
	@Prop() marginzero: boolean = false
	render() {
		let marginzero = this.marginzero ? 'marginzero ' : ''
		let contained = this.contained && !this.outlined ? 'contained ' : ''
		let outlined = this.outlined && !this.contained ? 'outlined ' : ''
		let genClass = marginzero + contained + outlined
		return (
			<button class={genClass} type={this.type} disabled={this.disabled}>
				<slot />
			</button>
		)
	}
}
