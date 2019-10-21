import { Component, h, Prop, Element } from '@stencil/core'

@Component({
	tag: 'mvs-title',
	styleUrl: 'mvs-title.scss',
	shadow: true,
})
export class MvsTitle {
	@Element() el: HTMLElement
	/**
	 * Propriedade interna que define automaticamente a tag H a ser usada.
	 */
	@Prop() rank: number = 6
	/**
	 * Sobreescreve o tag html definido automaticamente.
	 */
	@Prop() override: true | false | 1 | 2 | 3 | 4 | 5 | 6
	/**
	 * Define estilo de título a ser usado pelo componente.
	 */
	@Prop() level: true | false | 't1' | 't2' | 't3' | 't4' | 't5' | 't6'
	/**
	 * Define texto de cor branca, para fundos escuros.
	 */
	@Prop() white: boolean

	depth(parent, child, ignored) {
		let depth = 0
		while (!child.isEqualNode(parent)) {
			if (child.localName !== ignored) {
				depth++
				child = child.parentElement
			} else {
				child = child.parentElement
			}
		}
		return depth
	}

	async componentDidLoad() {
		const getRank = async () => {
			return await this.depth(
				document.querySelector('#root'),
				this.el,
				'mvs-flexgrid'
			)
		}
		getRank()
			.then(depth => {
				console.log(depth)
				this.rank = depth
			})
			.catch(err => console.log(err))
	}

	render() {
		let white = this.white ? 'white' : null
		let styling =
			this.level === 't1' || 't2' || 't3' || 't4' || 't5' || 't6'
				? this.level
				: null
		let setClass = `${styling ? styling : ''} ${white ? white : ''}`

		if (this.override) {
			let Tag = `h${this.override}`
			return (
				<Tag class={setClass}>
					<slot />
				</Tag>
			)
		} else {
			let Tag = `h${this.rank}`
			return (
				<Tag class={setClass}>
					<slot />
				</Tag>
			)
		}
	}
}
