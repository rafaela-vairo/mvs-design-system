import { Component, h, Listen, Prop } from '@stencil/core'

/* let latestKnownScrollY = 0,
	ticking = false,
	genClass = 'slideDown'

function onScroll() {
	latestKnownScrollY = window.scrollY
	requestTick()
	console.log(genClass)
}

function requestTick() {
	if (!ticking) {
		requestAnimationFrame(update)
	}
	ticking = true
}

function update() {
	ticking = false
	if (latestKnownScrollY > 80) {
		genClass = 'slideUp'
	} else if (latestKnownScrollY < 80) {
		genClass = 'slideDown'
	}
}

window.addEventListener('scroll', onScroll, false) */

@Component({
	tag: 'mvs-navbar',
	styleUrl: 'mvs-navbar.scss',
	shadow: true,
})
export class MvsNavbar {
	@Prop({ reflect: true }) setClass: string = ' '
	@Listen('scroll', { target: 'window' })
	handleScroll() {
		if (window.scrollY > window.innerHeight - 860) {
			this.setClass = 'slideUp'
		} else if (window.scrollY < window.innerHeight - 860) {
			this.setClass = 'slideDown'
		}
	}

	render() {
		return (
			<header class={this.setClass} id='header'>
				<a href='#home'>
					<img
						class='link-brand'
						src='../../assets/icon/ufrj-100-anos-branco-horizontal.svg'
						alt='UFRJ 100 years logo'
					/>
				</a>
				<div class='links'>
					<a href='#about'>
						<mvs-navbutton class='link'>the ufrj</mvs-navbutton>
					</a>
					<a href='#numbers'>
						<mvs-navbutton class='link'>figures</mvs-navbutton>
					</a>
					<a href='#projects'>
						<mvs-navbutton class='link'>projects</mvs-navbutton>
					</a>
					<a href='#teaching'>
						<mvs-navbutton class='link'>teaching</mvs-navbutton>
					</a>
					<a href='#research'>
						<mvs-navbutton class='link'>research</mvs-navbutton>
					</a>
					<a href='#extension'>
						<mvs-navbutton class='link'>extension</mvs-navbutton>
					</a>
					<a href='#footer'>
						<mvs-navbutton class='link'>campuses</mvs-navbutton>
					</a>
				</div>
			</header>
		)
	}
}
