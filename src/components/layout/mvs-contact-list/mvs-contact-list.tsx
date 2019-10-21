import { Component, h, State, Prop } from '@stencil/core'

const contatos = [
	{
		letra: 'A',
		nome: 'Fulana da Silva Sauro',
		cargo: 'Gerente',
		email: 'fulanadasilva@pr4.ufrj.br',
		telefone: '(21)3948-0934',
	},
	{
		letra: 'A',
		nome: 'Fulana da Silva Sauro',
		cargo: 'Gerente',
		email: 'fulanadasilva@pr4.ufrj.br',
		telefone: '(21)3948-0934',
	},
	{
		letra: 'A',
		nome: 'Fulana da Silva Sauro',
		cargo: 'Gerente',
		email: 'fulanadasilva@pr4.ufrj.br',
		telefone: '(21)3948-0934',
	},
	{
		letra: 'A',
		nome: 'Fulana da Silva Sauro',
		cargo: 'Gerente',
		email: 'fulanadasilva@pr4.ufrj.br',
		telefone: '(21)3948-0934',
	},
]

@Component({
	tag: 'mvs-contact-list',
	styleUrl: 'mvs-contact-list.scss',
	shadow: true,
})
export class MvsContactList {
	@State() contacts: Array<any> = contatos
	@Prop() teste: any = ''

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
				<div class='content'>
					<div class='section'>
						<div>
							<mvs-title level='t5'>Divisão de Adminissão</mvs-title>
						</div>
						{this.contacts.map(contact => (
							<div class='contact'>
								<div class='data'>
									<div class='letter'>
										<mvs-paragraph color='primary'>
											{contact.letra}
										</mvs-paragraph>
									</div>
									<mvs-paragraph>
										<div class='name'>{contact.nome}</div>
										{contact.cargo}
										<br />
										<mvs-anchor href={`mailto:${contact.email}`}>
											{contact.email}
										</mvs-anchor>
										<br />
										{contact.telefone}
									</mvs-paragraph>
								</div>
								<div class='divider'>
									<mvs-divider />
									{/* esse divider precisa ser situacional, 
                                    talvez mudar para algo criado em css 
                                    através de last-of-type ou last-child */}
								</div>
							</div>
						))}
					</div>
				</div>
			</mvs-grid>
		)
	}
}
