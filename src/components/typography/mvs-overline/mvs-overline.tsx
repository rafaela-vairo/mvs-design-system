import { Component, h } from '@stencil/core';


@Component({
    tag: 'mvs-overline',
    styleUrl: 'mvs-overline.scss',
    shadow: true,
})
export class MvsOverline {

    render = () => <span><slot/></span>;
        
}