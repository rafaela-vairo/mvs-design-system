import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-modal',
    styleUrl: 'mvs-modal.scss',
    shadow: true
})
export class MvsModal {

    @Prop() id: String;

    render() {
        return (
            <div class="background">
                <div class="modal"></div>
            </div>
        );
    }
}
