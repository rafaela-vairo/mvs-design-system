import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-hero',
	styleUrl: 'mvs-hero.scss',
	shadow: true,
})
export class mvshero {
	@Prop() background: string
	@Prop() herotitle: string
	@Prop() button: string
	@Prop() bgimg: string =
		'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

	render() {
		let setBgImg = `url('${this.bgimg}')`
		return (
			<div class='image' style={{ backgroundImage: setBgImg }}>
				<div class='body'>
					<mvs-flexgrid container>
						<mvs-flexgrid
							item
							lg={2}
							xl={2}
							class='spacer'
							style={{ order: '0' }}
						/>
						<mvs-flexgrid item sm={12} md={6} lg={4} xl={4} class='content'>
							<div class='text'>
								<mvs-title class='hero' white>
									{this.herotitle}
								</mvs-title>
								<br />
								<mvs-title class='herotext' white level='t4'>
									<slot />
								</mvs-title>
								<br />
								{this.button ? (
									<mvs-button
										light
										variant='ghost'
										style={{ margin: '0px !important' }}
									>
										{this.button}
									</mvs-button>
								) : (
									''
								)}
							</div>
						</mvs-flexgrid>
						<mvs-flexgrid item sm={12} md={6} lg={4} xl={4} class='countdown'>
							<mvs-countdown />
						</mvs-flexgrid>
						<mvs-flexgrid
							item
							lg={2}
							xl={2}
							class='spacer'
							style={{ order: '3' }}
						/>
					</mvs-flexgrid>
				</div>
			</div>
		)
	}
}
