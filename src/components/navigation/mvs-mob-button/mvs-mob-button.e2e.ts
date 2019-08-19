import { newE2EPage } from '@stencil/core/testing'

describe('mvs-mob-button', () => {
	it('renders', async () => {
		const page = await newE2EPage()

		await page.setContent('<mvs-mob-button></mvs-mob-button>')
		const element = await page.find('mvs-mob-button')
		expect(element).toHaveClass('hydrated')
	})
})
