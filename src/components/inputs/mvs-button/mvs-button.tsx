import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-button',
	styleUrl: 'mvs-button.scss',
	//shadow: true,
})
export class MvsButton {
	/**
	 * Caso `true`, desabilita o botão.
	 */
	@Prop({ reflect: true }) disabled: boolean = false
	/**
	 * Define o tipo do botão.
	 */
	@Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button'
	/**
	 * Define estilo do botão.
	 */
	@Prop() variant: 'flat' | 'ghost' | 'contained' = 'flat'
	/**
	 * Caso `true`, botão terá largura 100%.
	 */
	@Prop() full: boolean = false
	/**
	 * Caso `true`, botão terá tema light/night mode.
	 */
	@Prop() light: boolean = false
	render() {
		let light = this.light ? 'light ' : ''
		let genClass = this.variant + ' ' + light
		return (
			<button class={genClass} type={this.type} disabled={this.disabled}>
				<slot />
			</button>
		)
	}
}
