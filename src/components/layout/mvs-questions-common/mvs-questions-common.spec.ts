import { TestWindow } from '@stencil/core/testing';
import { MvsQuestionsCommon } from './mvs-questions-common';

describe('mvs-questions-common', () => {
  it('should build', () => {
    expect(new MvsQuestionsCommon()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsQuestionsCommonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsQuestionsCommon],
        html: '<mvs-questions-common></mvs-questions-common>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
