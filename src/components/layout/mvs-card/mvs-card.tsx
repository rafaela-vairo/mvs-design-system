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
			</div>
		)
	}
}
