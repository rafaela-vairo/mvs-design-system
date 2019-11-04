import { Component, h, Prop, Listen } from '@stencil/core';


@Component({
	tag: 'mvs-modal',
	styleUrl: 'mvs-modal.scss',
	shadow: true,
})
export class MvsModal {
	@Prop({ reflect: true, reflectToAttr: true }) name: string
	@Prop() show: boolean

	@Listen('onShowModal', { target: 'document' })
	showModal(event) {
		if (event.detail.modal === this.name) this.show = event.detail.visible;
	}

	hide(e) {
		console.log(e.target.id)
		if (e.target.offsetParent === null) {
			e.target.classList.remove('show')
			this.show = false;
		} else if (e.target.id === 'close') {
			e.target.offsetParent.classList.remove('show')
			this.show = false;
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
					<div class='header'>
						<mvs-button
							variant='contained'
							id='close'
							class='icon'
							onClick={this.hide.bind(this)}
						>
							close
						</mvs-button>
					</div>
					<slot />
				</div>
			</div>
		)
	}
}
