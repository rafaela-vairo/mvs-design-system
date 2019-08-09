import { Component, h, Prop, Element } from '@stencil/core'

@Component({
	tag: 'mnv-t',
	styleUrl: 'mnv-t.scss',
	shadow: true
})
export class MnvT {
	@Prop() level: number
	@Element() el: HTMLElement

	depth(parent, descendant) {
		var depth = 0
		while (!descendant.isEqualNode(parent)) {
			depth++
			descendant = descendant.parentElement
		}
		return depth
	}

	async componentDidLoad() {
		this.level = this.depth(document.querySelector('mnv-base'), this.el)
		console.log(this.level)
	}
	render() {
		if (this.level === 1) {
			return (
				<h1>
					<slot />
				</h1>
			)
		} else if (this.level === 2) {
			return (
				<h2>
					<slot />
				</h2>
			)
		} else if (this.level === 3) {
			return (
				<h3>
					<slot />
				</h3>
			)
		} else if (this.level === 4) {
			return (
				<h4>
					<slot />
				</h4>
			)
		} else if (this.level === 5) {
			return (
				<h5>
					<slot />
				</h5>
			)
		} else if (this.level >= 6) {
			return (
				<h6>
					<slot />
				</h6>
			)
		}
	}
}
