import { Component, h } from '@stencil/core';

@Component({
    tag: 'mvs-pre',
    styleUrl: 'mvs-pre.scss',
    shadow: true,
})
export class MvsPre {
    render() {
        return (
            <pre>
                <slot/>
            </pre>
        );
    }
}
