import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-paragraph',
	styleUrl: 'mvs-paragraph.scss',
	shadow: true
})
export class MvsParagraph {
	/**
	 * Altera o parágrafo para tamanho reduzido (body 2).
	 */
	@Prop() bodytwo: boolean

	/**
	 * Ativa ou desativa estilização de capitular.
	 */
	@Prop() capitular: boolean

	render() {
		let bodyclass = this.bodytwo ? 'bodytwo' : 'bodyone'
		let hascap = this.capitular ? 'capitular' : ''
		let setclass = bodyclass + ' ' + hascap
		return (
			<p class={setclass}>
				<slot />
			</p>
		)
	}
}
