import { TestWindow } from '@stencil/core/testing';
import { MvsNavigation } from './mvs-navigation';

describe('mvs-navigation', () => {
  it('should build', () => {
    expect(new MvsNavigation()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsNavigationElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsNavigation],
        html: '<mvs-navigation></mvs-navigation>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
