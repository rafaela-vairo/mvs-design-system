import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-subtitle',
    styleUrl: 'mvs-subtitle.scss',
})
export class MvsSubtitle {

    @Prop() type: string;

    render() {
        switch (this.type) {
            case 'one': return <span class="one"><slot/></span>;
            case 'two': return <span class="two"><slot/></span>;
        }
    }
}
