import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-card-expander',
	styleUrl: 'mvs-card-expander.scss',
	shadow: true,
})
export class MvsCardExpander {
	@Prop() overline: any
	@Prop() cardtitle: string
	@Prop() subtitle: string
	@Prop() text: string
	@Prop() button: string
	@Prop() link: string = 'http://google.com'
	@Prop() media: string =
		'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
	@Prop() alt: string = 'Texto alternativo em falta, favor entrar em contato'
	@Prop() width: number
	@Prop() open: 'open' | 'closed' = 'closed'

	render() {
		return (
			<div>
				<div class='root' tabindex='0'>
					<div class='media-container'>
						<img class='media' src={this.media} alt={this.alt} />
					</div>
					<div class='main'>
						<div class='text'>
							<mvs-overline>{this.overline}</mvs-overline>
							<mvs-title level='t5'>
								<a href={this.link}>{this.cardtitle}</a>
							</mvs-title>
							<mvs-subtitle type='two'>{this.subtitle}</mvs-subtitle>
							<mvs-paragraph bodytwo>{this.text}</mvs-paragraph>
						</div>
						<div class='buttons'>
							<mvs-button>{this.button}</mvs-button>
						</div>
					</div>
				</div>
				<div class={`${this.open}`}>
					<slot />
				</div>
			</div>
		)
	}
}
