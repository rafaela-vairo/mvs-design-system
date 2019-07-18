/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MnvMark {}
  interface MnvStrong {}
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLMnvMarkElement extends Components.MnvMark, HTMLStencilElement {}
  var HTMLMnvMarkElement: {
    prototype: HTMLMnvMarkElement;
    new (): HTMLMnvMarkElement;
  };

  interface HTMLMnvStrongElement extends Components.MnvStrong, HTMLStencilElement {}
  var HTMLMnvStrongElement: {
    prototype: HTMLMnvStrongElement;
    new (): HTMLMnvStrongElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'mnv-mark': HTMLMnvMarkElement;
    'mnv-strong': HTMLMnvStrongElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface MnvMark extends JSXBase.HTMLAttributes<HTMLMnvMarkElement> {}
  interface MnvStrong extends JSXBase.HTMLAttributes<HTMLMnvStrongElement> {}
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'mnv-mark': MnvMark;
    'mnv-strong': MnvStrong;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

