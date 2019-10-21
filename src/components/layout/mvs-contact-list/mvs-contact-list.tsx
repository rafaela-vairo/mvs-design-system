import { Component, h, State } from '@stencil/core';
import { findContacts } from '../../../services/contact.services';


@Component({
    tag: 'mvs-contact-list',
    styleUrl: 'mvs-contact-list.scss',
    shadow: true,
})

export class MvsContactList {

    @State() contacts: any = {};
    @State() letter: string= '';

    // Obtém todos os contatos ao carregar o componente []
    async componentDidLoad() { 
        const contacts = {};
        const res = await findContacts();
        for(const contact of res.acf.secoes[2].contato_conteudo) {
            if (contacts[contact.contato_categoria.name] === undefined) {
                contacts[contact.contato_categoria.name] = [];
            }
            contacts[contact.contato_categoria.name] = [ 
                ...contacts[contact.contato_categoria.name], 
                contact,
            ];
            
        }
        this.contacts = contacts;
        // let letter = null;
        // const objects = data.sort((a, b) => (a.color > b.color) ? 1: -1);
        // for (obejct of objects) {
        //     if (letter !== obejct.name[0]) {
        //         letter = object.name[0]
        //         console.log(letter);
        //     }
        //     console.log(object)
        // }
    }

    render() {
        return (
            <mvs-grid>
                <div class="content">
                    {
                        Object.keys(this.contacts).map(category => (
                            <div class="section">
                                <div>
                                    <mvs-title level="t5">{category}</mvs-title>
                                </div>
                                {
                                    this.contacts[category].sort((a, b) => (a.contato_nome > b.contato_nome) ? 1: -1).map(contact => {
                                        return (
                                            <div class="contact">
                                                <div class="data">
                                                    <div>
                                                        <mvs-subtitle type="one">
                                                            { 
                                                                this.letter !== contact.contato_nome[0] 
                                                                ? this.letter = contact.contato_nome[0]
                                                                : ''
                                                            }
                                                        </mvs-subtitle>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <mvs-subtitle type="one">
                                                                {contact.contato_nome}
                                                            </mvs-subtitle>
                                                        </div>
                                                        <mvs-subtitle type="one">
                                                            {contact.contato_cargo}
                                                        </mvs-subtitle>
                                                        <mvs-subtitle type="one">
                                                            {contact.contato_email}
                                                        </mvs-subtitle>
                                                        <mvs-subtitle type="one">
                                                            {contact.contato_telefone}
                                                        </mvs-subtitle>
                                                    </div>
                                                </div>
                                                <div class="divider">
                                                    <mvs-divider />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ))
                    }
                    {/* <div class="section">
                        <div>
                            <mvs-title level="t5">Divisão de Adminissão</mvs-title>
                        </div>
                        <div class="contact">
                            <div class="data">
                                <div>
                                    <mvs-subtitle type="one">
                                        A
                                    </mvs-subtitle>
                                </div>
                                <div>
                                    <div>
                                        <mvs-subtitle type="one">Ana Maria Costa Couto</mvs-subtitle>
                                    </div>
                                    <mvs-subtitle type="one">Gerente</mvs-subtitle>
                                    <mvs-subtitle type="one">rejanebarros@pr4.ufrj.br</mvs-subtitle>
                                    <mvs-subtitle type="one">(21) 3938-0613</mvs-subtitle>
                                </div>
                            </div>
                            <div class="divider">
                                <mvs-divider />
                            </div>
                        </div>
                    </div> */}
                </div>
            </mvs-grid>
        );
    }
}
