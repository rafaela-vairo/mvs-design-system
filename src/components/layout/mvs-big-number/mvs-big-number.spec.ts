import { TestWindow } from '@stencil/core/testing';
import { MvsBigNumber } from './mvs-big-number';

describe('mvs-big-number', () => {
  it('should build', () => {
    expect(new MvsBigNumber()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsBigNumberElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsBigNumber],
        html: '<mvs-big-number></mvs-big-number>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
