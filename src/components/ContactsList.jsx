import React, {useContext} from 'react'
import ContactItem from "./ContactItem"
import SearchBar from "./UI/SearchBar/SearchBar"
import {ContextApp} from "../reducers"

const ContactsList = () => {

	const {state} = useContext(ContextApp)

	return (
		<div className={'contacts-container'}>
			<SearchBar/>
			{state.searchedContacts.length === 0 ?
				<div>
					No contacts found
				</div>
				:
				state.searchedContacts.map(contact => (
						<ContactItem
							key={contact.phone}
							contact={contact}
						/>
					))
			}
		</div>
	)
}

export default ContactsList