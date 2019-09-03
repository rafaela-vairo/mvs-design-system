import { Component, h, Prop } from '@stencil/core'

const cards = [
	{
		overline: 'Lorem ipsum',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Impedit consequatur laboriosam in et velit quasi mollitia sunt ex. In ipsum eius porro maiores voluptas eos nam a. Assumenda quasi a velit et vitae laudantium distinctio quod.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Impedit consequatur laboriosam in et velit quasi mollitia sunt ex. In ipsum eius porro maiores voluptas eos nam a. Assumenda quasi a velit et vitae laudantium distinctio quod.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Accusantium consectetur suscipit et itaque iure corrupti. Explicabo dolorum qui quos ut. Odit repellat nobis. Esse nam rerum illum eaque distinctio.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Aliquid voluptas neque vitae sed repellat explicabo voluptatem veritatis. Inventore modi delectus consequuntur et sed est. Molestias qui debitis placeat suscipit dolor corrupti. Molestiae et dolor ut numquam.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Ea nulla impedit repudiandae possimus porro unde. Iste et totam. Et quod iusto delectus possimus vel sint in velit dolor. Eveniet quam ab facilis. Perferendis perspiciatis voluptas quo sint fugiat ipsum veritatis dolores non.',
		button: 'ação',
		link: '',
	},
]

@Component({
	tag: 'mvs-card-list',
	styleUrl: 'mvs-card-list.scss',
	shadow: true,
})
export class MvsCardList {
	@Prop() data = cards
	render() {
		return (
			<mvs-flexgrid container>
				{this.data.map(cards => (
					<mvs-flexgrid xl={6} lg={6} md={6} sm={6} item>
						<mvs-card
							overline={cards.overline}
							cardtitle={cards.title}
							subtitle={cards.subtitle}
							text={cards.text}
							button={cards.button}
							link={cards.link}
						/>
					</mvs-flexgrid>
				))}
			</mvs-flexgrid>
		)
	}
}
