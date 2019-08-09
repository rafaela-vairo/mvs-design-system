import { Component, h, Prop, Element } from '@stencil/core'

@Component({
	tag: 'mnv-t',
	styleUrl: 'mnv-t.scss',
	shadow: true
})
export class MnvT {
	@Prop({ reflect: true }) hierarchy: number
	@Prop() override: number
	@Prop() level: string
	@Prop() white: boolean
	@Element() el: HTMLElement

	depth(parent, descendant) {
		var depth = 0
		var ignored = document.querySelector('mnv-grid')
		while (!descendant.isEqualNode(parent)) {
			if (!descendant.isEqualNode(ignored)) {
				depth++
				descendant = descendant.parentElement
			} else {
				depth--
				descendant = descendant.parentElement
			}
		}
		return depth
	}

	async componentDidLoad() {
		this.hierarchy = this.depth(document.querySelector('#root'), this.el)
		console.log(this.hierarchy)
	}
	render() {
		let white = this.white ? 'white' : null
		let styling =
			this.level === 't1' || 't2' || 't3' || 't4' || 't5' || 't6'
				? this.level
				: null
		let setClass = `${styling ? styling : ''} ${white ? white : ''}`
		if (this.override) {
			if (this.override === 1) {
				return (
					<h1 class={setClass}>
						<slot />
					</h1>
				)
			} else if (this.override === 2) {
				return (
					<h2 class={setClass}>
						<slot />
					</h2>
				)
			} else if (this.override === 3) {
				return (
					<h3 class={setClass}>
						<slot />
					</h3>
				)
			} else if (this.override === 4) {
				return (
					<h4 class={setClass}>
						<slot />
					</h4>
				)
			} else if (this.override === 5) {
				return (
					<h5 class={setClass}>
						<slot />
					</h5>
				)
			} else if (this.override >= 6) {
				return (
					<h6 class={setClass}>
						<slot />
					</h6>
				)
			} else {
				return <slot />
			}
		} else {
			if (this.hierarchy === 1) {
				return (
					<h1 class={setClass}>
						<slot />
					</h1>
				)
			} else if (this.hierarchy === 2) {
				return (
					<h2 class={setClass}>
						<slot />
					</h2>
				)
			} else if (this.hierarchy === 3) {
				return (
					<h3 class={setClass}>
						<slot />
					</h3>
				)
			} else if (this.hierarchy === 4) {
				return (
					<h4 class={setClass}>
						<slot />
					</h4>
				)
			} else if (this.hierarchy === 5) {
				return (
					<h5 class={setClass}>
						<slot />
					</h5>
				)
			} else if (this.hierarchy >= 6) {
				return (
					<h6 class={setClass}>
						<slot />
					</h6>
				)
			} else {
				return <slot />
			}
		}
	}
}
