import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mvs-formulario',
    styleUrl: 'mvs-formulario.scss',
    shadow: true,
})

export class MvsFormulario {

    @Prop() newProp: any;

    render() {
        return (
            <form action="#">
                <mvs-grid class="container">
                    <div class="col">
                        <label>Nome</label>
                        <input id="nome" name="nome" type="text"/>
                    </div>
                    <div class="col">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div class="col">
                        <label>Telefone</label>
                        <input type="phone"/>
                    </div>
                    <div class="col">
                        <label>Assunto</label>
                        <input type="text" placeholder="Qual é seu pedido"/>
                    </div>
                    <div class="col">
                        <label>Mensagem</label>
                        <textarea placeholder="Escreva sua mensagem" />
                    </div>
                    <div class="col">
                        <label>Você já possui cadastro?</label>
                        <input type="radio" name="registered" value="Sim" />Sim <br/>
                        <input type="radio" name="registered" value="Não" />Não
                    </div>
                    <div class="col">
                        <label>Tipo de vaículo?</label>
                        <select name="" id="">
                            <option value="jornal">Jornal</option>
                            <option value="reviste">Revista</option>
                            <option value="tv">TV</option>
                            <option value="rádio">Rádio</option>
                            <option value="site">Site</option>
                        </select>
                    </div>
                    <div class="col">
                        <label>Qual é sua profissão?</label>
                        <input type="checkbox" value="juiz" />Juiz <br/>
                        <input type="checkbox" value="capitão" />Capitão <br/>
                        <input type="checkbox" value="polícia" />Poícia
                    </div>
                    <div class="col">
                        <label>Veículo</label>
                        <input type="text" placeholder="Em qual empresa você trabalha"/>
                    </div>
                </mvs-grid>
            </form>
        );
    }
}
