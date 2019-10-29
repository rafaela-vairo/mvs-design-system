import { TestWindow } from '@stencil/core/testing';
import { MvsModal } from './mvs-modal';

describe('mvs-modal', () => {
  it('should build', () => {
    expect(new MvsModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsModalElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsModal],
        html: '<mvs-modal></mvs-modal>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
