import React from 'react'
import ContactItem from "./ContactItem"
import SearchBar from "./UI/SearchBar/SearchBar"

const ContactsList = ({contacts, dispatch}) => {
	return (
		<div className={'contacts-container'}>
			<SearchBar dispatch={dispatch}/>
			{contacts.length === 0 ?
				<div>
					No contacts found
				</div>
				:
				contacts.map(contact => (
						<ContactItem
							dispatch={dispatch}
							key={contact.phone}
							contact={contact}
						/>
					))
			}
		</div>
	)
}

export default ContactsList