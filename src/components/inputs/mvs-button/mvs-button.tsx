import { Component, Prop, h, Event, EventEmitter } from '@stencil/core'

@Component({
	tag: 'mvs-button',
	styleUrl: 'mvs-button.scss',
	//shadow: true,
})
export class MvsButton {
	@Prop({ reflect: true }) id: string
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
	@Prop() modal: string;

	@Event() onShowModal: EventEmitter;
	showModal() {
		// console.log('Teste');
		this.onShowModal.emit({ visible: true, modal: this.modal });
	}

	render() {
		let light = this.light ? 'light ' : ''
		let genClass = this.variant + ' ' + light
		return (
			<button
				id={this.id}
				class={genClass}
				type={this.type}
				disabled={this.disabled}
				onClick={this.showModal.bind(this)}
			>
				<slot />
			</button>
		)
	}
}
