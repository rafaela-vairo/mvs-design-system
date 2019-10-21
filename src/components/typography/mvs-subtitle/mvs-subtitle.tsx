import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-subtitle',
	styleUrl: 'mvs-subtitle.scss',
	shadow: true,
})
export class MvsSubtitle {
	@Prop() type: 'one' | 'two'

	render() {
		switch (this.type) {
			case 'one':
				return (
					<span class='one'>
						<slot />
					</span>
				)
			case 'two':
				return (
					<span class='two'>
						<slot />
					</span>
				)
		}
	}
}
