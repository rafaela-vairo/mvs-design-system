import { Component, h, Prop, Host } from '@stencil/core'

const cards = [
	{
		title: 'Card Um',
		button: 'lorem',
		img: 'https://endereco.etc',
		text: 'lorem ipsum dolor sit amet',
	},
	{
		title: 'Card Dois',
		button: 'ipsum',
		img: 'https://endereco.etc',
		text: 'lorem ipsum dolor sit amet',
	},
	{
		title: 'Card Três',
		button: 'dolor',
		img: 'https://endereco.etc',
		text: 'lorem ipsum dolor sit amet',
	},
]

@Component({
	tag: 'mvs-card-list',
	styleUrl: 'mvs-card-list.scss',
	shadow: true,
})
export class MvsCardList {
	@Prop() data: any[] = cards
	render() {
		return (
			<Host>
				{this.data.map(card => (
					<mvs-new-card
						title={card.title}
						buttontext={card.button}
						maintext={card.text}
					/>
				))}
			</Host>
		)
	}
}
