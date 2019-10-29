import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-modal',
    styleUrl: 'mvs-modal.scss',
    shadow: true
})
export class MvsModal {

    @Prop() show: Boolean;

    hide(e) {
        e.target.classList.remove('show');
    }

    render() {
        return (
            <div class="dialog show" onClick={this.hide.bind(this)}>
                <div class="modal open">
                    <div class="header">
                        <button id="close"></button>
                    </div>
                </div>
            </div>
        );
    }
}
