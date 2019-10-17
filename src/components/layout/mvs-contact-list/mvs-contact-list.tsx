import { Component, h, State, Prop } from '@stencil/core';


@Component({
    tag: 'mvs-contact-list',
    styleUrl: 'mvs-contact-list.scss',
    shadow: true,
})

export class MvsContactList {

    @State() contacts: Array<any> = [];
    @Prop() teste: any = "";

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
                <div class="content">
                    {/* {
                        this.contacts.map(contact => (
                            <div />
                        ))
                    } */}
                    <div class="section">
                        <mvs-title level="t5">Divisão de Adminissão</mvs-title>
                        <div class="contact">
                            <div>
                                <mvs-subtitle>
                                    A
                                </mvs-subtitle>
                            </div>
                            <div>
                                <mvs-subtitle type="one">Ana Maria Costa Couto</mvs-subtitle>
                                <mvs-subtitle type="one">Gerente</mvs-subtitle>
                                <mvs-subtitle type="one">rejanebarros@pr4.ufrj.br</mvs-subtitle>
                                <mvs-subtitle type="one">(21) 3938-0613</mvs-subtitle>
                            </div>
                        </div>
                    </div>
                </div>
            </mvs-grid>
        );
    }
}
