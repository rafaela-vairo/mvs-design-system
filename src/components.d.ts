/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MnvBase {}
  interface MnvButton {
    'contained': boolean;
    'disabled': boolean;
    'outlined': boolean;
    'type': string;
  }
  interface MnvCol {
    'lg': number;
    'md': number;
    'sm': number;
    'xl': number;
    'xs': number;
  }
  interface MnvContainer {
    'lg': number;
    'md': number;
    'sm': number;
    'xl': number;
    'xs': number;
  }
  interface MnvFigure {
    'alt': string;
    'src': string;
  }
  interface MnvFigureCaption {
    'alt': string;
    'caption': string;
    'src': string;
  }
  interface MnvLink {
    'href': string;
  }
  interface MnvMark {}
  interface MnvParagraph {
    /**
    * Altera o parágrafo para tamanho reduzido (body 2).
    */
    'bodytwo': boolean;
    /**
    * Ativa ou desativa estilização de capitular.
    */
    'capitular': boolean;
  }
  interface MnvPre {}
  interface MnvRow {
    'lg': number;
    'md': number;
    'sm': number;
    'xl': number;
    'xs': number;
  }
  interface MnvStrong {}
  interface MnvTitle {
    'level': string;
    'overline': string;
  }
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


  interface HTMLMnvBaseElement extends Components.MnvBase, HTMLStencilElement {}
  var HTMLMnvBaseElement: {
    prototype: HTMLMnvBaseElement;
    new (): HTMLMnvBaseElement;
  };

  interface HTMLMnvButtonElement extends Components.MnvButton, HTMLStencilElement {}
  var HTMLMnvButtonElement: {
    prototype: HTMLMnvButtonElement;
    new (): HTMLMnvButtonElement;
  };

  interface HTMLMnvColElement extends Components.MnvCol, HTMLStencilElement {}
  var HTMLMnvColElement: {
    prototype: HTMLMnvColElement;
    new (): HTMLMnvColElement;
  };

  interface HTMLMnvContainerElement extends Components.MnvContainer, HTMLStencilElement {}
  var HTMLMnvContainerElement: {
    prototype: HTMLMnvContainerElement;
    new (): HTMLMnvContainerElement;
  };

  interface HTMLMnvFigureElement extends Components.MnvFigure, HTMLStencilElement {}
  var HTMLMnvFigureElement: {
    prototype: HTMLMnvFigureElement;
    new (): HTMLMnvFigureElement;
  };

  interface HTMLMnvFigureCaptionElement extends Components.MnvFigureCaption, HTMLStencilElement {}
  var HTMLMnvFigureCaptionElement: {
    prototype: HTMLMnvFigureCaptionElement;
    new (): HTMLMnvFigureCaptionElement;
  };

  interface HTMLMnvLinkElement extends Components.MnvLink, HTMLStencilElement {}
  var HTMLMnvLinkElement: {
    prototype: HTMLMnvLinkElement;
    new (): HTMLMnvLinkElement;
  };

  interface HTMLMnvMarkElement extends Components.MnvMark, HTMLStencilElement {}
  var HTMLMnvMarkElement: {
    prototype: HTMLMnvMarkElement;
    new (): HTMLMnvMarkElement;
  };

  interface HTMLMnvParagraphElement extends Components.MnvParagraph, HTMLStencilElement {}
  var HTMLMnvParagraphElement: {
    prototype: HTMLMnvParagraphElement;
    new (): HTMLMnvParagraphElement;
  };

  interface HTMLMnvPreElement extends Components.MnvPre, HTMLStencilElement {}
  var HTMLMnvPreElement: {
    prototype: HTMLMnvPreElement;
    new (): HTMLMnvPreElement;
  };

  interface HTMLMnvRowElement extends Components.MnvRow, HTMLStencilElement {}
  var HTMLMnvRowElement: {
    prototype: HTMLMnvRowElement;
    new (): HTMLMnvRowElement;
  };

  interface HTMLMnvStrongElement extends Components.MnvStrong, HTMLStencilElement {}
  var HTMLMnvStrongElement: {
    prototype: HTMLMnvStrongElement;
    new (): HTMLMnvStrongElement;
  };

  interface HTMLMnvTitleElement extends Components.MnvTitle, HTMLStencilElement {}
  var HTMLMnvTitleElement: {
    prototype: HTMLMnvTitleElement;
    new (): HTMLMnvTitleElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'mnv-base': HTMLMnvBaseElement;
    'mnv-button': HTMLMnvButtonElement;
    'mnv-col': HTMLMnvColElement;
    'mnv-container': HTMLMnvContainerElement;
    'mnv-figure': HTMLMnvFigureElement;
    'mnv-figure-caption': HTMLMnvFigureCaptionElement;
    'mnv-link': HTMLMnvLinkElement;
    'mnv-mark': HTMLMnvMarkElement;
    'mnv-paragraph': HTMLMnvParagraphElement;
    'mnv-pre': HTMLMnvPreElement;
    'mnv-row': HTMLMnvRowElement;
    'mnv-strong': HTMLMnvStrongElement;
    'mnv-title': HTMLMnvTitleElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface MnvBase extends JSXBase.HTMLAttributes<HTMLMnvBaseElement> {}
  interface MnvButton extends JSXBase.HTMLAttributes<HTMLMnvButtonElement> {
    'contained'?: boolean;
    'disabled'?: boolean;
    'outlined'?: boolean;
    'type'?: string;
  }
  interface MnvCol extends JSXBase.HTMLAttributes<HTMLMnvColElement> {
    'lg'?: number;
    'md'?: number;
    'sm'?: number;
    'xl'?: number;
    'xs'?: number;
  }
  interface MnvContainer extends JSXBase.HTMLAttributes<HTMLMnvContainerElement> {
    'lg'?: number;
    'md'?: number;
    'sm'?: number;
    'xl'?: number;
    'xs'?: number;
  }
  interface MnvFigure extends JSXBase.HTMLAttributes<HTMLMnvFigureElement> {
    'alt'?: string;
    'src'?: string;
  }
  interface MnvFigureCaption extends JSXBase.HTMLAttributes<HTMLMnvFigureCaptionElement> {
    'alt'?: string;
    'caption'?: string;
    'src'?: string;
  }
  interface MnvLink extends JSXBase.HTMLAttributes<HTMLMnvLinkElement> {
    'href'?: string;
  }
  interface MnvMark extends JSXBase.HTMLAttributes<HTMLMnvMarkElement> {}
  interface MnvParagraph extends JSXBase.HTMLAttributes<HTMLMnvParagraphElement> {
    /**
    * Altera o parágrafo para tamanho reduzido (body 2).
    */
    'bodytwo'?: boolean;
    /**
    * Ativa ou desativa estilização de capitular.
    */
    'capitular'?: boolean;
  }
  interface MnvPre extends JSXBase.HTMLAttributes<HTMLMnvPreElement> {}
  interface MnvRow extends JSXBase.HTMLAttributes<HTMLMnvRowElement> {
    'lg'?: number;
    'md'?: number;
    'sm'?: number;
    'xl'?: number;
    'xs'?: number;
  }
  interface MnvStrong extends JSXBase.HTMLAttributes<HTMLMnvStrongElement> {}
  interface MnvTitle extends JSXBase.HTMLAttributes<HTMLMnvTitleElement> {
    'level'?: string;
    'overline'?: string;
  }
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
    'mnv-base': MnvBase;
    'mnv-button': MnvButton;
    'mnv-col': MnvCol;
    'mnv-container': MnvContainer;
    'mnv-figure': MnvFigure;
    'mnv-figure-caption': MnvFigureCaption;
    'mnv-link': MnvLink;
    'mnv-mark': MnvMark;
    'mnv-paragraph': MnvParagraph;
    'mnv-pre': MnvPre;
    'mnv-row': MnvRow;
    'mnv-strong': MnvStrong;
    'mnv-title': MnvTitle;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


