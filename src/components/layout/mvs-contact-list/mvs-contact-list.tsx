import { Component, h, State } from '@stencil/core';


@Component({
    tag: 'mvs-contact-list',
    styleUrl: 'mvs-contact-list.scss',
    shadow: true,
})
export class MvsContactList {

    @State() contacts: Array<any> = [];

    // Obtém todos os contatos ao carregar o componente []
    // async componentDidLoad() { 
    //     let letter = null;
    //     const objects = data.sort((a, b) => (a.color > b.color) ? 1: -1);
    //     for (obejct of objects) {
    //         if (letter !== obejct.name[0]) {
    //             letter = object.name[0]
    //             console.log(letter);
    //         }
    //         console.log(object)
    //     }
    // }

    render() {
        return (
            <mvs-grid>
                {/* <div class="content">
                    {
                        this.contacts.map(contact => (
                            <div />
                        ))
                    }
                </div> */}
            </mvs-grid>
        );
    }
}
