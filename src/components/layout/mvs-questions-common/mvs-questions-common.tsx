import { Component, h, State } from '@stencil/core'
import { findQuestions } from '../../../services/questions.services'

@Component({
	tag: 'mvs-questions-common',
	styleUrl: 'mvs-questions-common.scss',
	shadow: true,
})
export class MvsQuestionsCommon {
	@State() sections: Array<any> = []

	// Obtém todas as perguntas comuns []
	async componentWillLoad() {
		const res = await findQuestions()
		this.sections = res
	}

	showResponse(e) {
		e.target.classList.toggle('active')
		const panel = e.target.nextElementSibling
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null
			// panel.style.paddingTop = null;
			// panel.style.paddingBottom = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px'
			// panel.style.paddingTop = '24px';
			// panel.style.paddingBottom = '24px';
		}
		panel.classList.toggle('show')
	}

	render() {
		return (
			<mvs-grid>
				{this.sections.map(section => (
					<div class='theme' key={section.secao_titulo}>
						<div class='title'>
							<mvs-title level='t3'>{section.secao_titulo}</mvs-title>
						</div>
						{section.faq_conteudo.map(question => (
							<div class='question' key={question.ID}>
								<button class='accordion' onClick={this.showResponse}>
									{question.faq_pergunta}
								</button>
								<div class='panel'>
									<mvs-paragraph bodytwo>{question.faq_resposta}</mvs-paragraph>
								</div>
							</div>
						))}
					</div>
				))}
			</mvs-grid>
		)
	}
}
