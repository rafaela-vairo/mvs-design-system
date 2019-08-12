import { Component, Prop, Listen, h } from '@stencil/core'

@Component({
	tag: 'mvs-mob-menu',
	styleUrl: 'mvs-mob-menu.scss',
	shadow: true,
})
export class MvsMobMenu {
	@Prop() open: boolean = false
	@Prop({ reflect: true }) setClass: string = 'menuroot'
	@Listen('scroll', { target: 'window' })
	handleScroll() {
		if (window.scrollY > window.innerHeight - 760) {
			this.setClass = 'menuroot slideUp'
		} else if (window.scrollY < window.innerHeight - 760) {
			this.setClass = 'menuroot slideDown'
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
			<header class={this.setClass}>
				<mvs-mob-button
					onClick={() => this.handleMenuClick()}
					open={this.open}
				/>
				<div class='logo'>
					<a href='#home'>
						<img
							class='link-brand'
							src='../../assets/icon/ufrj-100-anos-branco-horizontal.svg'
							alt='UFRJ 100 years logo'
						/>
					</a>
				</div>
				<mvs-mob-drawer open={this.open}>
					<a
						class='menuitem'
						href='#about'
						onClick={() => this.handleLinkClick()}
					>
						The UFRJ
					</a>
					<a
						class='menuitem'
						href='#numbers'
						onClick={() => this.handleLinkClick()}
					>
						Figures
					</a>
					<a
						class='menuitem'
						href='#projects'
						onClick={() => this.handleLinkClick()}
					>
						Projects
					</a>
					<a
						class='menuitem'
						href='#teaching'
						onClick={() => this.handleLinkClick()}
					>
						Teaching
					</a>
					<a
						class='menuitem'
						href='#research'
						onClick={() => this.handleLinkClick()}
					>
						Research
					</a>
					<a
						class='menuitem'
						href='#extension'
						onClick={() => this.handleLinkClick()}
					>
						Extension
					</a>
					<a
						class='menuitem'
						href='#footer'
						onClick={() => this.handleLinkClick()}
					>
						Campuses
					</a>
				</mvs-mob-drawer>
			</header>
		)
	}
}
