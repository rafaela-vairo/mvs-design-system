import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-mob-button',
	styleUrl: 'mvs-mob-button.scss',
	shadow: true
})
export class MvsMobButton {
	@Prop() open: boolean = false

	render() {
		let setOpen = this.open
			? 'hamburger hamburger--slider is-active'
			: 'hamburger hamburger--slider'
		return (
			<button class={setOpen} type='button'>
				<span class='hamburger-box'>
					<span class='hamburger-inner' />
				</span>
			</button>
		)
	}
}
