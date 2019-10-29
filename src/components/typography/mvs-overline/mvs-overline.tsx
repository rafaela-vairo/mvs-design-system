import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mvs-overline',
	styleUrl: 'mvs-overline.scss',
	shadow: true,
})
export class MvsOverline {
	@Prop() color: 'light' | 'dark' | 'primary' | 'secondary'
	@Prop() blah: 1 | 2 | 34 | null | 'string'
	render = () => (
		<div style={{ '--theme-color': `$text-${this.color}` }}>
			<slot />
		</div>
	)
}
