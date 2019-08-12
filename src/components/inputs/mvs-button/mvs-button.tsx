import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-button',
	styleUrl: 'mvs-button.scss',
	// shadow: true,
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
	@Prop() variant: 'text' | 'outlined' | 'contained' = 'text'
	/**
	 * Caso `true`, botão terá largura 100%.
	 */
	@Prop() full: boolean = false
	/**
	 * Caso `true`, botão não terá margens.
	 */
	@Prop() marginzero: boolean = false
	render() {
		let marginzero = this.marginzero ? 'marginzero ' : ''
		let full = this.full ? 'full' : ''
		let genClass = marginzero + this.variant + full
		return (
			<button class={genClass} type={this.type} disabled={this.disabled}>
				<slot />
			</button>
		)
	}
}
