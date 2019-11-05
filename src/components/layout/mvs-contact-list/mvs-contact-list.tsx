import { Component, h, State } from '@stencil/core'
import { findContacts } from '../../../services/contact.services'

@Component({
	tag: 'mvs-contact-list',
	styleUrl: 'mvs-contact-list.scss',
	shadow: true,
})
export class MvsContactList {
	@State() contacts: any = {}
	@State() letter: string = ''

	// Obtém todos os contatos ao carregar o componente []
	async componentDidLoad() {
		const contacts = {}
		const res = await findContacts()
		for (const contact of res[0].contato_conteudo) {
			if (contacts[contact.contato_categoria.name] === undefined) {
				contacts[contact.contato_categoria.name] = []
			}
			contacts[contact.contato_categoria.name] = [
				...contacts[contact.contato_categoria.name],
				contact,
			]
		}
		this.contacts = contacts
	}

	render() {
		return (
			<mvs-grid>
				<div class='content'>
					{Object.keys(this.contacts).map(category => (
						<div class='section'>
							<div class='category'>
								<mvs-title level='t5'>{category}</mvs-title>
							</div>
							{this.contacts[category]
								.sort((a, b) => (a.contato_nome > b.contato_nome ? 1 : -1))
								.map(contact => (
									<div class='contact'>
										<div class='data'>
											<div class='letter'>
												<mvs-paragraph color='primary'>
													{this.letter !== contact.contato_nome[0]
														? (this.letter = contact.contato_nome[0])
														: ''}
												</mvs-paragraph>
											</div>
											<mvs-paragraph class='main-text'>
												<span class='name'>{contact.contato_nome}</span>
												{contact.contato_cargo}
												<br />
												<mvs-anchor href={`mailto:${contact.contato_email}`}>
													{contact.contato_email}
												</mvs-anchor>
												<br />
												{contact.contato_telefone}
											</mvs-paragraph>
										</div>
									</div>
								))}
						</div>
					))}
				</div>
			</mvs-grid>
		)
	}
}
