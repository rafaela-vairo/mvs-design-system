import { Component, Prop, h, Event, EventEmitter } from '@stencil/core'

@Component({
	tag: 'mvs-button-modal',
	styleUrl: 'mvs-button-modal.scss',
})
export class MvsButtonModal {
	@Prop({ reflect: true }) bid: string
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
	@Prop() variant: 'flat' | 'ghost' | 'contained' | 'close' = 'flat'
	/**
	 * Caso `true`, botão terá largura 100%.
	 */
	@Prop() full: boolean = false
	/**
	 * Caso `true`, botão terá tema light/night mode.
	 */
	@Prop() light: boolean = false
	@Prop() modal: string

	@Event() onShowModal: EventEmitter
	showModal() {
		this.onShowModal.emit({ visible: true, modal: this.modal })
	}

	/* appendModal() {
		var modal = document.createElement('div')
		var content = document.createTextNode('lorem ipsum')
		modal.appendChild(content)
		modal.classList.add('modal-root')
		document.body.prepend(modal)
	} */

	render() {
		let light = this.light ? 'light ' : ''
		let genClass = this.variant + ' ' + light
		return (
			<button
				id={this.bid}
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
