import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mvs-tooltip',
	styleUrl: 'mvs-tooltip.scss',
	shadow: true,
})
export class MvsTooltip {
	/**
	 * Define conteúdo do tooltip.
	 */
	@Prop() label: string
	/**
	 * Define largura do tooltip.
	 */
	@Prop() length: string
	render() {
		return (
			<span aria-label={this.label} data-tooltip-length={this.length}>
				<slot />
			</span>
		)
	}
}
