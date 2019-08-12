import { Component, h, Prop } from '@stencil/core'
//import Launch from 'material-design-icons/action/svg/production/ic_launch_24px.svg'

@Component({
	tag: 'mvs-card',
	styleUrl: 'mvs-card.scss',
	shadow: true,
})
export class MvsCard {
	@Prop({ reflect: true }) overline: any
	@Prop() cardtitle: any
	@Prop() subtitle: any
	@Prop() button: string
	@Prop() link: string = 'http://google.com'
	@Prop() width: number

	handleClick = () => (window.location.href = this.link)

	render() {
		return (
			<div onClick={this.handleClick}>
				<div class='card-root' style={{ width: `${this.width}px` }}>
					<div class='header'>
						{/* <img src={Launch} /> */}
						<mvs-overline>{this.overline}</mvs-overline>
						<mvs-title level='t5'>{this.cardtitle}</mvs-title>
						<mvs-subtitle type='one'>{this.subtitle}</mvs-subtitle>
						<mvs-divider />
					</div>
					<div class='body'>
						<mvs-paragraph>
							<slot />
						</mvs-paragraph>
					</div>
					<div class='action'>
						<form action={this.link}>
							<mvs-button marginzero variant='contained' full type='submit'>
								{this.button}
							</mvs-button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
