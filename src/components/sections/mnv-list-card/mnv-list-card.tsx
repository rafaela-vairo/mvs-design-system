import { Component, h, Prop, Host } from '@stencil/core'
import _ from 'lodash'

@Component({
	tag: 'mnv-list-card',
	styleUrl: 'mnv-list-card.scss',
	shadow: true,
})
export class MnvListCard {
	@Prop() data: any
	@Prop() name: string

	async componentWillLoad() {
		this.data = _.filter(this.data, {
			acf_fc_layout: 'secao_cartoes',
			secao_titulo: this.name,
		})[0]
		if (this.data.length > 1) {
			console.log('Seção possui títulos duplicados')
			this.data = []
			return
		}
	}

	render() {
		return (
			<Host>
				<mnv-grid container class='list-card-root'>
					<mnv-grid item class='card-title' xl='8' lg='12' md='12' sm='12'>
						<mnv-title level='t1'>{this.name}</mnv-title>
					</mnv-grid>
					{this.data['cartao_conteudo'].map((card, key) => (
						<mnv-grid
							item
							class='card-root'
							key={key}
							sm='12'
							md='6'
							lg='6'
							xl='6'
						>
							<mnv-card
								cardtitle={card.projeto_titulo}
								subtitle={card.projeto_subtitulo}
								overline={card.projeto_categoria.name}
								button='More info'
								link={card.projeto_link_url}
								class='card'
							>
								{card.projeto_descricao}
							</mnv-card>
						</mnv-grid>
					))}
				</mnv-grid>
			</Host>
		)
	}
}
