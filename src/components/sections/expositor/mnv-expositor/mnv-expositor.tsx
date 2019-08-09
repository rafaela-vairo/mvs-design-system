import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-expositor',
	styleUrl: 'mnv-expositor.scss',
})
export class MnvExpositor {
	@Prop() sectionTitle: string
	@Prop() sectionSubtitle: string
	@Prop() spotlightAlt: string
	@Prop() spotlight
	@Prop() projects

	render() {
		return (
			<div class='root'>
				<div
					class='header'
					style={{
						'--main-background': `url('${this.spotlight.projeto_imagem.url}')`,
					}}
					aria-label={this.spotlightAlt}
				>
					<mnv-grid container>
						<mnv-grid item block xl='12' lg='12' md='12' sm='12'>
							<mnv-title level='t1'>{this.sectionTitle}</mnv-title>
							<mnv-title level='t3'>{this.sectionSubtitle}</mnv-title>
						</mnv-grid>
					</mnv-grid>
				</div>
				<mnv-grid container>
					<mnv-grid item block>
						<div class='base'>
							<mnv-projeto
								projTitle={this.spotlight.projeto_titulo}
								projText={this.spotlight.projeto_descricao}
								projImg=''
								projImgLegenda={this.spotlight.projeto_imagem.caption}
								projButtonUrl={this.spotlight.projeto_link_url}
							/>
							{this.projects.map(project => (
								<mnv-projeto
									projTitle={project.projeto_titulo}
									projText={project.projeto_descricao}
									projImg={project.projeto_imagem.url}
									projImgLegenda={project.projeto_imagem.caption}
									projImgAlt={project.projeto_imagem.alt}
									projButtonUrl={project.projeto_link_url}
								/>
							))}
						</div>
					</mnv-grid>
				</mnv-grid>
			</div>
		)
	}
}
