import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-hero',
	styleUrl: 'mnv-hero.scss'
	//shadow: true
})
export class Mnvhero {
	@Prop() background: string
	@Prop() herotitle: string
	@Prop() button: string
	@Prop() bgimg: string =
		'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

	render() {
		let setBgImg = `url('${this.bgimg}')`
		return (
			<div class='image' style={{ backgroundImage: setBgImg }}>
				<div class='body' id='root'>
					<mnv-grid container>
						<mnv-grid item sm='12' md='9' lg='6' xl='6'>
							<mnv-t white class='hero'>
								{this.herotitle}
							</mnv-t>
						</mnv-grid>
						<mnv-grid item md='3' lg='6' xl='6' />
						<mnv-grid item sm='12' md='6' lg='4' xl='4'>
							<mnv-t override={2} level='t4' white>
								<slot />
							</mnv-t>
						</mnv-grid>
						{this.button ? (
							<mnv-grid item sm='12' md='12' lg='12' xl='12'>
								<mnv-button
									outlined
									marginzero
									style={{ margin: '0px !important' }}
								>
									{this.button}
								</mnv-button>
							</mnv-grid>
						) : (
							''
						)}
					</mnv-grid>
				</div>
			</div>
		)
	}
}
