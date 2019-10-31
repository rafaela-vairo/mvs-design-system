import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-modal',
    styleUrl: 'mvs-modal.scss',
    shadow: true
})
export class MvsModal {

    @Prop({ reflect: true, reflectToAttr: true }) name: string;
		@Prop() show: boolean;

		// @Listen('showModal', { capture: true })
		// showModal(ev) {
		// 	console.log(ev);
		// }

    hide(e) {
			console.log(e);
			if (e.target.offsetParent === null) {
				e.target.classList.remove('show');
			} else if (e.target.id === 'close') {
				e.target.offsetParent.classList.remove('show');
			}
			// if (e.target.offsetParent.id === this.name) {
			// 	return;
			// }
    }

    render() {
        return (
            <div id={this.name} class={'dialog ' + (this.show ? 'show' : '')} onClick={(e) => this.hide(e)}>
                <div class="modal open">
                    <div class="header">
											<button id="close" onClick={this.hide.bind(this)}></button>
                    </div>
                </div>
            </div>
        );
    }
}
