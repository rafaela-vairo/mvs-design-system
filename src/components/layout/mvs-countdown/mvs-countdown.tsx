import { Component, h, Prop, State, Element } from '@stencil/core'

@Component({
	tag: 'mvs-countdown',
	styleUrl: 'mvs-countdown.scss',
	shadow: true,
})
export class MvsCountdown {
	@State() counter
	@Prop() deadline = '2020-09-07'
	@Prop() endMessage: string
	@Prop() days: number
	@Prop() hours: number
	@Prop() minutes: number
	@Prop() seconds: number
	@Element() element: HTMLElement

	clock
	countDown
	second
	minute
	hour
	day

	componentWillLoad() {
		this.second = 1000
		this.minute = this.second * 60
		this.hour = this.minute * 60
		this.day = this.hour * 24

		this.countDown = new Date(2020, 8, 7).getTime()
		this.clock = setInterval(() => {
			let now = new Date().getTime()
			let distance = this.countDown - now
			this.days = Math.floor(distance / this.day)
			this.hours = Math.floor((distance % this.day) / this.hour)
			this.minutes = Math.floor((distance % this.hour) / this.minute)
			this.seconds = Math.floor((distance % this.minute) / this.second)

			this.counter = `${this.days} ${this.hours} ${this.minutes} ${this.seconds}`

			if (distance < 0) {
				clearInterval(this.clock)
				this.endMessage = 'Feliz 100 aninhos, Minerva!'
			}
		}, 1000)
	}

	componentDidLoad() {}

	render() {
		return (
			<mvs-flexgrid container xl={12} lg={12} md={12} sm={12}>
				<mvs-flexgrid item block xl={12} lg={12} md={12} sm={12}>
					<p>Hello world</p>
					<p>{this.counter}</p>
					<canvas id='canvas' width='300' height='300'></canvas>
				</mvs-flexgrid>
			</mvs-flexgrid>
		)
	}
}
