import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-app-bar',
	styleUrl: 'mvs-app-bar.scss',
	shadow: true,
})
export class MvsAppBar {
	@Prop() position: 'fixed' | 'sticky' | 'absolute' | 'static' | 'relative' =
		'fixed'
	@Prop() color: 'inherit' | 'primary' | 'secondary' | 'default' = 'primary'
	render() {
		let Component = 'span'
		return (
			<Component>
				<slot />
			</Component>
		)
	}
}
