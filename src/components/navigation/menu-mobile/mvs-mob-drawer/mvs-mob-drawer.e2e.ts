import { newE2EPage } from '@stencil/core/testing'

describe('mvs-mob-drawer', () => {
	it('renders', async () => {
		const page = await newE2EPage()

		await page.setContent('<mvs-mob-drawer></mvs-mob-drawer>')
		const element = await page.find('mvs-mob-drawer')
		expect(element).toHaveClass('hydrated')
	})
})
