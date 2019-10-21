import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-paragraph',
	styleUrl: 'mvs-paragraph.scss',
	shadow: true,
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

	/**
	 * Altera a cor do texto.
	 */
	@Prop() color: 'primary' | 'secondary' | 'white'

	render() {
		let bodyclass = this.bodytwo ? 'bodytwo' : 'bodyone'
		let hascap = this.capitular ? 'capitular' : ''
		let hascolor = this.color ? this.color : ''
		let setclass = bodyclass + ' ' + hascap + '' + hascolor
		return (
			<p class={setclass}>
				<slot />
			</p>
		)
	}
}
