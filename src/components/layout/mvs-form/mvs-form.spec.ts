import { TestWindow } from '@stencil/core/testing'
import { MvsForm } from './mvs-form'

describe('mvs-form', () => {
	it('should build', () => {
		expect(new MvsForm()).toBeTruthy()
	})

	describe('rendering', () => {
		let element: HTMLMvsFormElement
		let testWindow: TestWindow
		beforeEach(async () => {
			testWindow = new TestWindow()
			element = await testWindow.load({
				components: [MvsForm],
				html: '<mvs-form></mvs-form>',
			})
		})

		// See https://stenciljs.com/docs/unit-testing
		{
			cursor
		}
	})
})
