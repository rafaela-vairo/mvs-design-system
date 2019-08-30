import { Component, h, Prop } from '@stencil/core'
//import Launch from 'material-design-icons/action/svg/production/ic_launch_24px.svg'

@Component({
	tag: 'mvs-card',
	styleUrl: 'mvs-card.scss',
	shadow: true,
})
export class MvsCard {
	@Prop({ reflect: true }) overline: any
	@Prop() cardtitle: string = 'Título'
	@Prop() subtitle: string = 'Subtítulo'
	@Prop() button: string = 'Botão'
	@Prop() link: string = 'http://google.com'
	@Prop() width: number

	handleClick = () => (window.location.href = this.link)

	render() {
		return (
			<div class='root'>
				<div class='media-container'>
					<img
						class='media'
						src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
					/>
				</div>

				<div class='text'>
					<mvs-overline>Lorem Ipsum</mvs-overline>
					<mvs-title level='t5'>
						<a href='https://google.com'>
							Sint et est voluptatum magnam magnam eum fugit sit minima.
						</a>
					</mvs-title>
					<mvs-subtitle type='two'>
						Vero reiciendis pariatur doloremque aliquam maiores. Praesentium quo
						nemo in autem eum.
					</mvs-subtitle>
					<mvs-paragraph bodytwo>
						Aut eum omnis eligendi recusandae. Consequatur enim voluptas ullam
						ea minus sint quam possimus fugit. Ut non facilis. Labore minima ad
						porro voluptas nihil. Voluptates assumenda exercitationem cupiditate
						ducimus voluptatem vitae et sit alias.
					</mvs-paragraph>
					<div class='buttons'>
						<mvs-button>Ação</mvs-button>
						<mvs-button>Ação</mvs-button>
					</div>
				</div>
			</div>
		)
	}
}
