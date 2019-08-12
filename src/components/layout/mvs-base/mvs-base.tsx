import { Component, h } from '@stencil/core'
//import Axios from 'axios'

var linkNode = document.createElement('link')
linkNode.type = 'text/css'
linkNode.rel = 'stylesheet'
linkNode.href =
	'//fonts.googleapis.com/css?family=Alegreya+Sans+SC|Alegreya+Sans:400,400i,700,700i|PT+Serif:400,400i,700,700i|Playfair+Display:400i,700|Proza+Libre:600&display=swap'
document.head.appendChild(linkNode)

/* var linkIcons = document.createElement('link')
linkIcons.type = 'text/css'
linkIcons.rel = 'stylesheet'
linkIcons.href =
document.head.appendChild(linkIcons) */

/* export const config = Axios.create({
	baseURL: 'https://sust-dev.olimpo.tic.ufrj.br/wp-json/',
}) */

@Component({
	tag: 'mvs-base',
	styleUrl: 'mvs-base.scss',
})
export class MvsBase {
	render() {
		return <slot />
	}
}

// ;(async () => {
// 	const element = document.createElement('link')
// 	element.href =
// 		'//fonts.googleapis.com/css?family=Alegreya+Sans+SC|Alegreya+Sans:400,400i,700,700i|PT+Serif:400,400i,700,700i|Playfair+Display:400i,700|Proza+Libre:600&display=swap'
// 	document.querySelector('head').appendChild(element)
// })()
