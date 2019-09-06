import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-about',
	styleUrl: 'mvs-about.scss',
	shadow: true,
})
export class MvsAbout {
	@Prop() aboutTitle
	@Prop() text
	render() {
		return (
			<mvs-flexgrid container>
				<mvs-flexgrid xl={2} lg={2} item></mvs-flexgrid>
				<mvs-flexgrid xl={8} lg={8} block md={12} sm={12} item>
					<div class="content">
						<mvs-title level='t1'>
							<div class="title">Título</div>
						</mvs-title>
						<mvs-paragraph>
							Consequatur sed minus ducimus doloremque magnam. Illum facilis
							voluptas est. Cum ea veniam enim laboriosam asperiores sunt modi.
							Quia similique atque. Perspiciatis quia tempore blanditiis eius
							dolorem omnis omnis. Sunt similique quo ex. Quos ut esse maxime qui
							officiis distinctio. Quidem ut architecto illo quas ut. Inventore
							nisi quia nam optio. Voluptatem autem voluptatibus veritatis. In
							numquam sapiente voluptatum voluptatem. Id unde aut rerum. In
							consequuntur quisquam. Aliquid recusandae laborum vitae et
							temporibus sed.
						</mvs-paragraph>
					</div>
				</mvs-flexgrid>
				<mvs-flexgrid xl={2} lg={2} item></mvs-flexgrid>
			</mvs-flexgrid>
		)
	}
}
