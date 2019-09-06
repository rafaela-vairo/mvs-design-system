import { TestWindow } from '@stencil/core/testing';
import { MvsFooter } from './mvs-footer';

describe('mvs-footer', () => {
  it('should build', () => {
    expect(new MvsFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsFooterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsFooter],
        html: '<mvs-footer></mvs-footer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
