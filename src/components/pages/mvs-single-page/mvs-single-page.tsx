import { Component, Prop, h } from '@stencil/core'
import Axios from 'axios'

const dataBase = Axios.create({
	baseURL: 'https://admin.100anos.ufrj.br/wp-json/',
})

@Component({
	tag: 'mvs-single-page',
	styleUrl: 'mvs-single-page.scss',
})
export class MvsSinglePage {
	@Prop() data: any
	@Prop() numbers: any

	async componentWillLoad() {
		this.data = (await dataBase.get(
			'acf/v3/options/adm-secoes/?per_page=999'
		)).data.acf
		console.log(this.data)
		this.numbers = (await dataBase.get('/acf/v3/bignumbers/?per_page=99')).data
		console.log(this.numbers)
	}

	render() {
		return (
			<mvs-base>
				<mvs-navbar>Menu</mvs-navbar>
				<mvs-hero id='home' herotitle={this.data.cabecalho.cabecalho_titulo}>
					{this.data.cabecalho.cabecalho_descricao}
				</mvs-hero>
				<mvs-bg>
					<div id='about'>
						<mvs-about
							aboutTitle={this.data.apresentacao.apresentacao_titulo}
							text={this.data.apresentacao.apresentacao_texto}
						/>
					</div>
					<div id='numbers'>
						<mvs-big-number elements={this.numbers} />
					</div>
				</mvs-bg>
				<mvs-footer icons={this.data.rodape} />
			</mvs-base>
		)
	}
}
