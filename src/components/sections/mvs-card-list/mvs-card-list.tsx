import { Component, h, Prop } from '@stencil/core'

const cards = [
	{
		overline: 'Lorem ipsum 1',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text: 'Impedit consequatur laboriosam in et velit quasi distinctio quod.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 2',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text: 'Impedite laudantium distinctio quod.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 3',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Accusantium consectetur suscipit et itaque iure corrupti. Explicabo dolorum qui quos ut. Odit repellat nobis. Esse nam rerum illum eaque distinctio.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 4',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Aliquid voluptas neque vitae sed repellat explicabo corrupti. Molestiae et dolor ut numquam.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 5',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Ea nulla impedit repudiandae possimus porro unde. Iste et totam. Et quod iusto delectus possimus vel sint in velit dolor. Eveniet quam ab facilis. Perferendis perspiciatis voluptas quo sint fugiat ipsum veritatis dolores non.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 6',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text: 'Impedite laudantium distinctio quod.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 7',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Accusantium consectetur suscipit et itaque iure corrupti. Explicabo dolorum qui quos ut. Odit repellat nobis. Esse nam rerum illum eaque distinctio.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 8',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Aliquid voluptas neque vitae sed repellat explicabo corrupti. Molestiae et dolor ut numquam.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 9',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text: 'Impedite laudantium distinctio quod.',
		button: 'ação',
		link: '',
	},
	{
		overline: 'Lorem ipsum 10',
		title: 'Ipsum dolor sit amet',
		subtitle:
			'Numquam et dolor sit nam adipisci doloremque voluptatum quia quo.',
		text:
			'Accusantium consectetur suscipit et itaque iure corrupti. Explicabo dolorum qui quos ut. Odit repellat nobis. Esse nam rerum illum eaque distinctio.',
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
			<div class='container'>
				<mvs-grid>
					{this.data.map(cards => (
						<mvs-card-expander
							overline={cards.overline}
							cardtitle={cards.title}
							subtitle={cards.subtitle}
							text={cards.text}
							link={cards.link}
						>
							{cards.text}
						</mvs-card-expander>
					))}
				</mvs-grid>
			</div>
		)
	}
}
