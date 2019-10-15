import { Component, h, State } from '@stencil/core';
import { getEmailId } from '../../../services/email.services';

@Component({
    tag: 'mvs-formulario',
    styleUrl: 'mvs-formulario.scss',
    shadow: true,
})

export class MvsFormulario {

    @State() email: any = {
        name: '', email: '', phone: '', subject: '', message: '', registered: true, typeVehicle: '', profession: [], vehicle: ''
    }

    async send() {
        const emailId = await getEmailId();
        console.log(emailId)
        // const res = await sendEmail(emailId, '')
        // return false;
    }

    setEmail(name, event) {
        this.email = { ...this.email, [name]: event.target[0].value }
    }

    setEmailArray(name, event) {
        if (event.target[0].checked)
            this.email = { ...this.email, [name]: [...this.email[name], event.target[0].value] }
        else {
            const index = this.email[name].indexOf(event.target[0].value);
            this.email[name].splice(index, 1);
        }
    }
    

    render() {
        return (
            <form action="" method="POST">
                <mvs-grid class="container">
                    <div class="col">
                        <label>Nome</label>
                        <input 
                            id="nome" 
                            type="text"
                            onChange={e => this.setEmail('name', e)}
                        />
                    </div>
                    <div class="col">
                        <label>Email</label>
                        <input 
                            type="email"
                            onChange={e => this.setEmail('email', e)}
                        />
                    </div>
                    <div class="col">
                        <label>Telefone</label>
                        <input 
                            type="phone"
                            onChange={e => this.setEmail('phone', e)}
                        />
                    </div>
                    <div class="col">
                        <label>Assunto</label>
                        <input 
                            type="text" 
                            placeholder="Qual é seu pedido"
                            onChange={e => this.setEmail('subject', e)}
                        />
                    </div>
                    <div class="col">
                        <label>Mensagem</label>
                        <textarea 
                            placeholder="Escreva sua mensagem" 
                            onChange={e => this.setEmail('message', e)}
                        />
                    </div>
                    <div class="col">
                        <label>Você já possui cadastro?</label>
                        <input 
                            type="radio" 
                            name="registered" 
                            value="true" 
                            checked
                            onClick={e => this.setEmail('registered', e)}
                        />Sim <br/>
                        <input 
                            type="radio" 
                            name="registered" 
                            value="false" 
                            onClick={e => this.setEmail('registered', e)}
                        />Não
                    </div>
                    <div class="col">
                        <label>Tipo de vaículo?</label>
                        <select name="" id="" onChange={e => this.setEmail('typeVehicle', e)}>
                            <option value="jornal">Jornal</option>
                            <option value="reviste">Revista</option>
                            <option value="tv">TV</option>
                            <option value="rádio">Rádio</option>
                            <option value="site">Site</option>
                        </select>
                    </div>
                    <div class="col">
                        <label>Qual é sua profissão?</label>
                        <input 
                            type="checkbox" 
                            value="juiz" 
                            onClick={e => this.setEmailArray('profession', e)} />Juiz <br/>
                        <input 
                            type="checkbox" 
                            value="capitão" 
                            onClick={e => this.setEmailArray('profession', e)} />Capitão <br/>
                        <input 
                            type="checkbox" 
                            value="polícia" 
                            onClick={e => this.setEmailArray('profession', e)}/>Poícia
                    </div>
                    <div class="col">
                        <label>Veículo</label>
                        <input 
                            type="text" 
                            placeholder="Em qual empresa você trabalha"
                            onChange={e => this.setEmail('vehicle', e)}
                        />
                    </div>
                    <div class="col">
                        <mvs-button type="button" variant="contained" onClick={this.send}>
                            Enviar
                        </mvs-button>
                    </div>
                </mvs-grid>
            </form>
        );
    }
}
