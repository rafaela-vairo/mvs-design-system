import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-footer',
	styleUrl: 'mvs-footer.scss',
	shadow: true,
})
export class MvsFooter {
	@Prop() icons = [
		{
			rodape_logo:
				'https://admin.100anos.ufrj.br/wp-content/uploads/sites/3/2019/09/ufrj-logo-branco-small-medium.png',
		},
	]

	render = () => (
		<footer>
			<mvs-flexgrid container id='container'>
				<mvs-flexgrid item sm={12} md={12} lg={12} xl={12} class='icons'>
					{this.icons.map(icons => (
						<div class='icon'>
							<img src={icons.rodape_logo} />
						</div>
					))}
				</mvs-flexgrid>
				<mvs-flexgrid item sm={12} md={12} lg={12} xl={12} class='text-end'>
					<mvs-paragraph bodytwo>
						<mvs-strong>
							<div>Feito por Coordcom</div>
						</mvs-strong>
					</mvs-paragraph>
				</mvs-flexgrid>
			</mvs-flexgrid>
		</footer>
	)
}
