import { TestWindow } from '@stencil/core/testing';
import { MvsFormulario } from './mvs-formulario';

describe('mvs-formulario', () => {
  it('should build', () => {
    expect(new MvsFormulario()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMvsFormularioElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MvsFormulario],
        html: '<mvs-formulario></mvs-formulario>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
