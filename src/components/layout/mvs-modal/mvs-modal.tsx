import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-modal',
    styleUrl: 'mvs-modal.scss',
    shadow: true
})
export class MvsModal {

    @Prop({ reflect: true, reflectToAttr: true }) name: string;
    @Prop() show: boolean;

    hide(e) {
        if (e.target.offsetParent.id === this.name) {
            e.target.offsetParent.classList.remove('show');
            return;
        }
        e.target.classList.remove('show');
    }

    render() {
        return (
            <div id={this.name} class={'dialog ' + (this.show ? 'show' : '')} onClick={this.hide.bind(this)}>
                <div class="modal open">
                    <div class="header">
                        <button id="close" onClick={this.hide.bind(this)}></button>
                    </div>
                </div>
            </div>
        );
    }
}
