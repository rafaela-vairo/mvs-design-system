import { Component, h, Prop, Listen, Element } from '@stencil/core'
@Component({
	tag: 'mvs-modal',
	styleUrl: 'mvs-modal.scss',
	shadow: true,
})
export class MvsModal {
	@Prop({ reflect: true, reflectToAttr: true }) name: string
	@Prop() show: boolean
	@Prop() size: 'small' | 'medium' | 'large'
	@Prop() closebtn: boolean = false
	@Element() el: HTMLElement

	@Listen('onShowModal', { target: 'document' })
	showModal(event) {
		if (event.detail.modal === this.name) this.show = event.detail.visible
	}

	hide(e) {
		console.log(e.target.id)
		if (e.target.offsetParent === null) {
			e.target.classList.remove('show')
			this.show = false
			e.target.hidden = true
		} else if (e.target.id === 'close') {
			e.target.offsetParent.classList.remove('show')
			this.show = false
		}
	}

	render() {
		return (
			<div
				id={this.name}
				class={'dialog ' + (this.show ? 'show' : '')}
				onClick={this.hide.bind(this)}
			>
				<div class='modal open'>
					<slot />
					{this.closebtn ? (
						<div class='header'>
							<mvs-button-modal
								bid='close'
								class='icon'
								variant='close'
								onClick={this.hide.bind(this)}
							>
								close
							</mvs-button-modal>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		)
	}
}
