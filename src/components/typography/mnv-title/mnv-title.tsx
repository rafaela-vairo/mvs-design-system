import { Component, h, Prop, Element } from '@stencil/core'

@Component({
	tag: 'mnv-title',
	styleUrl: 'mnv-title.scss',
	shadow: true,
})
export class MnvTitle {
	@Prop() hierarchy: number
	@Prop() override: number
	@Prop() level: string
	@Prop() white: boolean
	@Element() el: HTMLElement

	depth(parent?: any, descendant?: any) {
		var depth = 0
		var ignored = document.querySelector('mnv-grid')
		while (!descendant.isEqualNode(parent)) {
			if (!descendant.isEqualNode(ignored)) {
				depth++
				descendant = descendant.parentElement
			} else {
				depth--
				descendant = descendant.parentElement
				console.log('ignored')
			}
		}
		return depth
	}

	async componentDidLoad() {
		const getHierarchy = async () => {
			return await this.depth(document.querySelector('#root'), this.el)
		}
		getHierarchy()
			.then(depth => {
				console.log(depth)
				this.hierarchy = depth
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
			let Component = `h${this.override}`
			return (
				<Component class={setClass}>
					<slot />
				</Component>
			)
		} else {
			let Component = `h${this.hierarchy}`
			return (
				<Component class={setClass}>
					<slot />
				</Component>
			)
		}
	}
}
