import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil/router'
import Axios from 'axios'

const dataBase = Axios.create({
	baseURL: 'https://admin.sustainable.ufrj.br/wp-json/'
})

@Component({
	tag: 'app-heropage',
	styleUrl: 'app-heropage.scss'
})
export class AppHeropage {
	@Prop() match: MatchResults
	@Prop() data: any
	@Prop() numbers: any

	async componentWillLoad() {
		this.data = (await dataBase.get(
			'acf/v3/options/adm-secoes/?per_page=999'
		)).data.acf
		console.log(this.data)
		this.numbers = (await dataBase.get('/acf/v3/numero/?per_page=99')).data
		console.log(this.numbers)
	}

	render() {
		return (
			<div class='app-heropage'>
				<mnv-base />
				<mnv-navbar />
				<mnv-mob-menu />
				<mnv-hero
					id='home'
					herotitle={this.data['cabecalho']['cabecalho_titulo']}
					bgimg={this.data['cabecalho']['cabecalho_imagem']['url']}
				>
					{this.data['cabecalho']['cabecalho_descricao']}
				</mnv-hero>
				<mnv-bg>
					<div>
						<mnv-about
							id='about'
							mainTitle={this.data['apresentacao']['apresentacao_titulo']}
							mainText={this.data['apresentacao']['apresentacao_texto']}
						/>
					</div>
					<div>
						<mnv-bignumbers id='numbers' setNumbers={this.numbers} />
					</div>
					<div>
						<mnv-expositor-base id='projects' data={this.data['secoes']} />
					</div>
					<div>
						<mnv-list-card
							name='Teaching'
							id='teaching'
							data={this.data.secoes}
						/>
					</div>
					<div>
						<mnv-list-card
							name='Research'
							id='research'
							data={this.data.secoes}
						/>
					</div>
					<div>
						<mnv-list-card
							name='Extension'
							id='extension'
							data={this.data.secoes}
						/>
					</div>
				</mnv-bg>
				<mnv-footer id='footer' />
			</div>
		)
	}
}
