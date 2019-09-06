import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-about',
	styleUrl: 'mvs-about.scss',
	shadow: true,
})
export class MvsAbout {
	@Prop() aboutTitle
	@Prop() text
	render() {
		return (
			<mvs-flexgrid container>
				<mvs-flexgrid xl={2} lg={2} item></mvs-flexgrid>
				<mvs-flexgrid xl={8} lg={8} block md={12} sm={12} item>
					<div class='content'>
						<mvs-title level='t1'>
							<div class='title'>{this.aboutTitle}</div>
						</mvs-title>
						<div>
							<mvs-paragraph>
								A UFRJ faz 100 anos em 2020. A data exige de nós uma reflexão
								sobre seu papel no passado, presente e, principalmente, no
								futuro do país.
							</mvs-paragraph>
						</div>
						<div>
							<mvs-paragraph>
								Universidade do Brasil, criada em 7 de setembro de 1920 pelo
								presidente Epitácio Pessoa sob a alcunha “Universidade do Rio de
								Janeiro”, reunia três escolas de formação superior: a Real
								Academia de Artilharia, Fortificação e Desenho, a Faculdade
								Nacional de Medicina e a Faculdade Nacional de Direito. A essas
								unidades iniciais somaram-se em seguida a Escola Nacional de
								Belas Artes e a Faculdade Nacional de Filosofia.
							</mvs-paragraph>
						</div>
						<div>
							<mvs-paragraph>
								Foram necessárias algumas décadas, contudo, até que a
								Universidade se consolidasse como instituição de pesquisa. Além
								da excelência na formação superior, conquistou uma posição
								central para o desenvolvimento econômico e social do país, a
								partir do tripé ensino, pesquisa e extensão. Nos últimos anos, a
								UFRJ cresceu em diversos sentidos. Tornou-se mais diversa,
								voltada para a sociedade e mais rica em pesquisa.
							</mvs-paragraph>
						</div>
						<div>
							<mvs-paragraph>
								O centenário é uma oportunidade única para recuperarmos a
								memória da Universidade, fazermos um balanço dos desafios do
								presente e projetarmos o papel que queremos ter no futuro. A
								UFRJ, maior universidade federal do país, continua e continuará
								exercendo seu importante papel na educação e no desenvolvimento
								do Brasil. Para celebrar a data e refletir, estamos planejando
								múltiplas atividades voltadas para a comunidade universitária,
								os parceiros institucionais e o público em geral. Acompanhem por
								aqui!
							</mvs-paragraph>
						</div>
					</div>
				</mvs-flexgrid>
				<mvs-flexgrid xl={2} lg={2} item></mvs-flexgrid>
			</mvs-flexgrid>
		)
	}
}
