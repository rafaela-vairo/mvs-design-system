import { TestWindow } from '@stencil/core/testing';
import { MvsSidebar } from './mvs-sidebar';

describe('mvs-sidebar', () => {
  it('should build', () => {
    expect(new MvsSidebar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsSidebarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsSidebar],
        html: '<mvs-sidebar></mvs-sidebar>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
