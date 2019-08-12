import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mvs-iconbutton',
    styleUrl: 'mvs-iconbutton.scss',
    shadow: true,
})
export class MvsIconbutton {
    @Prop({ reflect: true }) disabled: boolean = false
    @Prop({ reflect: true }) type: string = 'button'
    render() {
        return (
            <button type={this.type} disabled={this.disabled}>
                <slot/>
            </button>
        );
    }
}
