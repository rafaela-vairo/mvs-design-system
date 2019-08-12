import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-figure-caption',
    styleUrl: 'mvs-figure-caption.scss',
    shadow: true,
})
export class MvsFigureCaption {

    @Prop({reflect: true}) src: string;
    @Prop({reflect: true}) alt: string;
    @Prop() bold: boolean;
    @Prop() italic: boolean;
    @Prop() boldspotlight: boolean;
    @Prop() italicspotlight: boolean;
    @Prop() boldtext: boolean;
    @Prop() italictext: boolean;

    render() {
        return (
            <figure>
                <img src={this.src} alt={this.alt} />
                <figcaption class={{
                    'bold': this.bold,
                    'italic': this.italic,
                    'bold-spotlight': this.boldspotlight,
                    'italic-spotlight': this.italicspotlight,
                    'bold-text': this.boldtext,
                    'italic-text': this.italictext,
                }}>
                    <slot name="spotlight"/>
                    <slot name="text" />
                </figcaption>
            </figure>
        );
    }
}
