import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-bignumbers',
	styleUrl: 'mnv-bignumbers.scss',
	shadow: true,
})
export class AppBignumbers {
	@Prop() setNumbers: any[]

	render() {
		return (
			<div>
				<mnv-grid container>
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item xl='8' lg='8' md='12' sm='12'>
						<mnv-title level='t1' class='bignumbers-title'>
							UFRJ Figures
						</mnv-title>
					</mnv-grid>
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item xl='8' lg='8' md='12' sm='12'>
						<mnv-bignumber numbers={this.setNumbers} />
					</mnv-grid>
					<mnv-grid item xl='2' lg='2' />
				</mnv-grid>
			</div>
		)
	}
}
