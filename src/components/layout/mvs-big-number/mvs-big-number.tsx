import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-big-number',
	styleUrl: 'mvs-big-number.scss',
	//shadow: true,
})
export class MvsBigNumber {
	@Prop() elements

	render = () => (
		<div>
			<mvs-flexgrid container>
				<mvs-flexgrid item lg={2} xl={2} />
				<mvs-flexgrid item sm={12} md={12} lg={8} xl={8}>
					<mvs-flexgrid container class='content'>
						<mvs-flexgrid item sm={12} md={12} lg={12} xl={12}>
							<mvs-title level='t1'>Números</mvs-title>
						</mvs-flexgrid>

						{this.elements.reverse().map(element => (
							<mvs-flexgrid
								item
								sm={12}
								md={3}
								lg={3}
								xl={3}
								key={element.id}
								class='element'
							>
								<div>
									<i class='icon material-icons'>{element.acf.numero_icone}</i>
									<mvs-paragraph>
										<mvs-strong>
											<div class='title'>{element.acf.numero_valor}</div>
										</mvs-strong>
									</mvs-paragraph>
									<mvs-paragraph bodytwo>
										<mvs-strong>
											<div class='subtitle'>{element.acf.numero_descricao}</div>
										</mvs-strong>
									</mvs-paragraph>
								</div>
							</mvs-flexgrid>
						))}
					</mvs-flexgrid>
				</mvs-flexgrid>
				<mvs-flexgrid item lg={2} xl={2} />
			</mvs-flexgrid>
		</div>
	)
}
