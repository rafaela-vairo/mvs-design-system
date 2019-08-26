import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
	namespace: 'mvs-ds',
	globalScript: 'src/global/script.js',
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'docs-readme',
		},
		{
			type: 'www',
			//serviceWorker: null, // disable service workers
			serviceWorker: {
				globPatterns: ['**/*.{js,css,json,html,ico,png}'],
			},
		},
	],
	plugins: [
		sass({
			injectGlobalPaths: [
				'src/global/variables.scss',
				'src/global/mixins.scss',
			],
		}),
	],
}
