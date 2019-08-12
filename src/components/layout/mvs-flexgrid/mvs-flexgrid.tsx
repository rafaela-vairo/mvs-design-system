import { Component, Prop, Host, h } from '@stencil/core'

@Component({
	tag: 'mvs-flexgrid',
	styleUrl: 'mvs-flexgrid.scss',
})
export class MvsGrid {
	/**
	 * Caso `true`, o componente se comportará como `container` capaz de receber `items`.
	 */
	@Prop() container: boolean
	/**
	 * Caso `true`, o componente se comportará como `item`, contido em um `container`.
	 */
	@Prop() item: boolean
	/**
	 * Largura do componente no breakpoint Extra Large, entre 1 e 12. Quando omitido, ocupa o espaço restante automaticamente.
	 */
	@Prop() xl: true | false | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	/**
	 * Largura do componente no breakpoint Large, entre 1 e 12. Quando omitido, ocupa o espaço restante automaticamente.
	 */
	@Prop() lg: true | false | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	/**
	 * Largura do componente no breakpoint Medium, entre 1 e 12. Quando omitido, ocupa o espaço restante automaticamente.
	 */
	@Prop() md: true | false | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	/**
	 * Largura do componente no breakpoint Small, entre 1 e 12. Quando omitido, ocupa o espaço restante automaticamente.
	 */
	@Prop() sm: true | false | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	/**
	 * Altera visualização de flex para block.
	 */
	@Prop() block: boolean
	/**
	 * Define espaçamento entre componentes do tipo `item`. Usando somente em componentes tipo `container`.
	 */
	@Prop() spacing: string
	render() {
		let spacing = this.spacing ? `grid-spacing-${this.spacing} ` : ''
		let xl = this.xl ? `grid-xl-${this.xl} ` : ''
		let lg = this.lg ? `grid-lg-${this.lg} ` : ''
		let md = this.md ? `grid-md-${this.md} ` : ''
		let sm = this.sm ? `grid-sm-${this.sm} ` : ''
		let container = this.container && !this.item ? 'grid-container ' : ''
		let item = this.item && !this.container ? 'grid-item ' : ''
		let block = this.block ? `block` : ''
		let genClass = xl + lg + md + sm + container + item + spacing + block
		return (
			<Host class={genClass}>
				<slot />
			</Host>
		)
	}
}
