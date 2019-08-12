import { newE2EPage } from '@stencil/core/testing'

describe('mvs-mob-menu', () => {
	it('renders', async () => {
		const page = await newE2EPage()

		await page.setContent('<mvs-mob-menu></mvs-mob-menu>')
		const element = await page.find('mvs-mob-menu')
		expect(element).toHaveClass('hydrated')
	})
})
