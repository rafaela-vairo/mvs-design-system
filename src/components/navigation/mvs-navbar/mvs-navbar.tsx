import { Component, h, Prop, Listen } from '@stencil/core'

const linkList = [
	{
		name: 'home',
		url: '#home',
	},
	{
		name: 'A UFRJ',
		url: '#about',
	},
	{
		name: 'Números',
		url: '#numbers',
	},
]

@Component({
	tag: 'mvs-navbar',
	styleUrl: 'mvs-navbar.scss',
	shadow: true,
})
export class MvsNavbar {
	@Prop() position: 'fixed' | 'sticky' | 'absolute' | 'static' | 'relative' =
		'fixed'
	@Prop() color: 'inherit' | 'primary' | 'secondary' | 'default' = 'primary'
	@Prop() logo: string = '../assets/icon/ufrj-100-anos-branco-horizontal.svg'
	@Prop() links: { name: string; url: string }[] = linkList
	@Prop() open: boolean = false
	@Prop() setClass: string = ''
	@Prop() lastScrollY: number = 0

	@Listen('scroll', { target: 'window' })
	scrollEvent(ev) {
		this.lastScrollY = ev.pageY
		if (this.lastScrollY > window.innerHeight / 4) {
			this.setClass = 'slideUp'
		} else {
			this.setClass = 'slideDown'
		}
	}

	handleMenuClick() {
		this.open = !this.open
	}
	handleLinkClick() {
		this.open = false
	}

	render() {
		return (
			<header class={this.setClass} id='header'>
				<a href='#home'>
					<img class='link-brand' src={this.logo} />
				</a>
				<div class='links'>
					{this.links.map(link => (
						<a href={link.url}>
							<mvs-navbutton class='link'>{link.name}</mvs-navbutton>
						</a>
					))}
				</div>
				<mvs-mob-button
					onClick={() => this.handleMenuClick()}
					open={this.open}
				/>
				<mvs-mob-drawer open={this.open}>
					{this.links.map(link => (
						<a href={link.url} onClick={() => this.handleLinkClick()}>
							<mvs-navbutton color='primary' class='link'>
								{link.name}
							</mvs-navbutton>
						</a>
					))}
				</mvs-mob-drawer>
			</header>
		)
	}
}
