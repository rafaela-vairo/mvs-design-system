import { TestWindow } from '@stencil/core/testing';
import { MvsButtonModal } from './mvs-button-modal';

describe('mvs-button-modal', () => {
  it('should build', () => {
    expect(new MvsButtonModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsButtonModalElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsButtonModal],
        html: '<mvs-button-modal></mvs-button-modal>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
