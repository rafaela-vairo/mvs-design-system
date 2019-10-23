import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-card-expander',
	styleUrl: 'mvs-card-expander.scss',
	shadow: true,
})
export class MvsCardExpander {
	@Prop() overline: any
	@Prop() cardtitle: string
	@Prop() subtitle: string
	@Prop() text: string
	@Prop() link: string = 'http://google.com'
	@Prop() media: string =
		'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
	@Prop() alt: string = 'Texto alternativo em falta, favor entrar em contato'

	render() {
		return (
			<div class='item' tabindex='0'>
				<div class='cover'>
					<img src={this.media} />
				</div>
				<div class='container'>
					<div class='content'>
						<mvs-grid marginzero>
							<div class='cargo'>coordenadora</div>
							<mvs-paragraph bodytwo class='heading'>
								<div class='nome'>
									<mvs-title level='t5'>Profa Dra Marta Mendonça</mvs-title>
								</div>
								<div class='contato'>
									<mvs-anchor href='mailto:martamendonca@gmail.com'>
										martamendonca@gmail.com
									</mvs-anchor>
								</div>
								<div class='links'>
									<mvs-anchor href=''>link para lattes</mvs-anchor>
								</div>
							</mvs-paragraph>
							<mvs-paragraph class='main-text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								euismod mauris sed mi dapibus posuere. Integer libero augue,
								tincidunt eget mauris et, congue tincidunt mauris. Etiam eu quam
								eu velit pharetra vestibulum. Nullam id nibh dui. Fusce a nibh a
								nunc scelerisque fermentum luctus eget ex. Proin erat dolor,
								dapibus id laoreet quis, tristique ac risus. Class aptent taciti
								sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Nulla gravida risus venenatis massa elementum
								gravida.
							</mvs-paragraph>
						</mvs-grid>
					</div>
				</div>
			</div>
		)
	}
}
