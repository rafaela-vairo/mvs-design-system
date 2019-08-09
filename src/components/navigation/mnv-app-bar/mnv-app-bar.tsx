import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-app-bar',
	styleUrl: 'mnv-app-bar.scss',
	shadow: true,
})
export class MnvAppBar {
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
