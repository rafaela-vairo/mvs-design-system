import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-new-card',
	styleUrl: 'mvs-new-card.scss',
	shadow: true,
})
export class MvsNewCard {
	@Prop() overline: string
	@Prop() title: string
	@Prop() subtitle: string
	@Prop() maintext: string
	@Prop() buttontext: string
	@Prop() buttonlink: string
	@Prop() media: string
	render() {
		return (
			<div>
				<div class='media'></div>
				<mvs-overline>{this.overline}</mvs-overline>
				<mvs-title level='t5' override={3}>
					{this.title}
				</mvs-title>
				<mvs-subtitle>{this.subtitle}</mvs-subtitle>
				<mvs-paragraph bodytwo>{this.maintext}</mvs-paragraph>
				<mvs-button>{this.buttontext}</mvs-button>
			</div>
		)
	}
}
