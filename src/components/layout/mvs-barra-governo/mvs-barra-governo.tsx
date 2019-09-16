import { Component, h } from '@stencil/core'

@Component({
	tag: 'mvs-barra-governo',
	styleUrl: 'mvs-barra-governo.scss',
	//shadow: true,
})
export class MvsBarraGoverno {
	render() {
		return (
			<div id='barra-brasil'>
				<ul id='menu-barra-temp'>
					<li>
						<a href='http://brasil.gov.br'>Portal do Governo Brasileiro</a>
					</li>
				</ul>
			</div>
		)
	}
}
