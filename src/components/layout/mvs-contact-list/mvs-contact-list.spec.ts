import { TestWindow } from '@stencil/core/testing';
import { MvsContactList } from './mvs-contact-list';

describe('mvs-contact-list', () => {
  it('should build', () => {
    expect(new MvsContactList()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsContactListElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsContactList],
        html: '<mvs-contact-list></mvs-contact-list>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
