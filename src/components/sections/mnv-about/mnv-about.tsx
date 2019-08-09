import { Component, h, Element, Prop } from '@stencil/core'

/* const abouttext = {
	title: 'Sobre a UFRJ',
	text: `A Universidade Federal do Rio de Janeiro(UFRJ) é a maior federal do Brasil e a primeira instituição
	 oficial de ensino superior do país, em atividade desde 1792 e organizada como estrutura universitária em 1920.
	 Com ótimas colocações em rankings acadêmicos nacionais e internacionais, a Universidade fará 100 anos em 2020.
	 Atualmente, é a quarta instituição que mais produz ciência no Brasil, desenvolvendo em todos os seus campi
	 pesquisas de ponta em diversas áreas de tecnologias sustentáveis: energia solar, novos combustíveis, agroecologia,
	 conservação ambiental, reciclagem, eficiência hídrica, entre outros.`
} */

@Component({
	tag: 'mnv-about',
	styleUrl: 'mnv-about.scss',
})
export class AppAbout {
	@Element() about: HTMLElement
	@Prop() mainTitle: string
	@Prop() mainText: string

	render() {
		return (
			<div class='about-root'>
				<mnv-grid container>
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item block xl='8' lg='12' md='12' sm='12'>
						<mnv-title level='t1' class='about-title'>
							{this.mainTitle}
						</mnv-title>
						<mnv-paragraph class='main-text'>{this.mainText}</mnv-paragraph>
					</mnv-grid>
					<mnv-grid item xl='2' lg='2' />
				</mnv-grid>
			</div>
		)
	}
}
