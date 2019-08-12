import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-figure',
	styleUrl: 'mvs-figure.css',
	shadow: true,
})
export class MvsFigure {
	@Prop({ reflect: true }) src: string
	@Prop({ reflect: true }) alt: string

	// Renderiza o componente
	render() {
		return (
			<figure>
				<img src={this.src} alt={this.alt} />
			</figure>
		)
	}
}
