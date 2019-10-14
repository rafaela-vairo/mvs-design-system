import { Component, h, Prop, Element } from '@stencil/core'

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
	@Element() el: HTMLElement
	/* @Event() transitioned: EventEmitter
	transitionedEmit(transition) {
		this.transitioned.emit(transition)
	}
	
	@Listen('')
	transitionedListen() {
		() => this.animateToNextState()) this.animateToNextState()
	} */

	currentState = 0
	states = [
		() => (this.el.style.transform = 'translate(0px, 0px)'),
		() => (this.el.style.transform = 'translate(100px, 0px)'),
		() => (this.el.style.transform = 'translate(100px, 100px)'),
		() => (this.el.style.transform = 'translate(0px, 100px)'),
	]

	animateToNextState = () => {
		requestAnimationFrame(() => {
			this.states[++this.currentState % this.states.length]()
		})
	}

	render() {
		return (
			<div class='item' tabindex='0'>
				<div class='cover'></div>
				<div class='content'>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							euismod mauris sed mi dapibus posuere. Integer libero augue,
							tincidunt eget mauris et, congue tincidunt mauris. Etiam eu quam
							eu velit pharetra vestibulum. Nullam id nibh dui. Fusce a nibh a
							nunc scelerisque fermentum luctus eget ex. Proin erat dolor,
							dapibus id laoreet quis, tristique ac risus. Class aptent taciti
							sociosqu ad litora torquent per conubia nostra, per inceptos
							himenaeos. Nulla gravida risus venenatis massa elementum gravida.
						</p>
					</div>
				</div>
			</div>
		)
	}
}
