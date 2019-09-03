import { Component, h, Prop, State, Element } from '@stencil/core'

@Component({
	tag: 'mvs-countdown',
	styleUrl: 'mvs-countdown.scss',
	//shadow: true,
})
export class MvsCountdown {
	@State() counter
	@Prop() deadline = '2020-09-07'
	@Prop() endMessage: string
	@State() days: number
	@Prop() hours: number
	@Prop() minutes: number
	@Prop() seconds: number

	@Prop() spanProcent
	@Element() element: HTMLElement

	clock
	countDown
	second
	minute
	hour
	day

	setClock() {
		let now = new Date().getTime()
		let distance = this.countDown - now
		this.days = Math.floor(distance / this.day)
		this.hours = Math.floor((distance % this.day) / this.hour)
		this.minutes = Math.floor((distance % this.hour) / this.minute)
		this.seconds = Math.floor((distance % this.minute) / this.second)

		this.counter = `${this.days} ${this.hours} ${this.minutes} ${this.seconds}`

		if (distance < 0) {
			this.endMessage = 'Feliz 100 aninhos, Minerva!'
		}
	}

	componentWillLoad() {
		this.second = 1000
		this.minute = this.second * 60
		this.hour = this.minute * 60
		this.day = this.hour * 24

		this.countDown = new Date(2020, 8, 7).getTime()
		this.clock = this.setClock()
	}

	componentDidLoad() {
		var can: any = this.element.querySelector('canvas.canvas')
		var c = can.getContext('2d')
		var d = this.days

		var posX = can.width / 2,
			posY = can.height / 2,
			oneProcent = 360 / 100,
			result = oneProcent * ((d / 380) * 100)

		c.lineCap = 'flat'

		c.beginPath()
		c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360))
		c.strokeStyle = 'rgba(236, 238, 255, .15)'
		c.lineWidth = 10
		c.stroke()

		c.beginPath()
		c.strokeStyle = 'rgba(73, 165, 249, 1)'
		c.lineWidth = 10
		c.arc(
			posX,
			posY,
			70,
			(Math.PI / 180) * 270,
			(Math.PI / 180) * (270 + result)
		)
		c.stroke()
	}

	render() {
		return (
			<mvs-flexgrid container xl={12} lg={12} md={12} sm={12}>
				<mvs-flexgrid item block xl={12} lg={12} md={12} sm={12}>
					<p>Hello world</p>
					<p>{this.spanProcent}</p>
					<p>{this.counter}</p>
					<canvas class='canvas' width='300' height='300'></canvas>
				</mvs-flexgrid>
			</mvs-flexgrid>
		)
	}
}
