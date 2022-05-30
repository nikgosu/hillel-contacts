import React, {useState} from 'react'
import MyHeader from "./MyHeader"
import ContactsList from "./ContactsList"
import MyDialog from "./UI/MyDialog/MyDialog"

const ContactsBook = () => {

	const [contacts, setContacts] = useState([
		{
			id: 1,
			name: 'Nikita',
			surname: 'Kim',
			phone: '+38 (067) 864 21 08'
		},
		{
			id: 2,
			name: 'Mykola',
			surname: 'Dobriy',
			phone: '+38 (067) 124 21 45'
		},
		{
			id: 3,
			name: 'Andrey',
			surname: 'Vasiliev',
			phone: '+38 (067) 257 21 54'
		},
		{
			id: 4,
			name: 'Ivan',
			surname: 'Basuk',
			phone: '+38 (067) 789 11 98'
		},
	])

	const [currentContact, setCurrentContact] = useState({})
	const [searchedContacts, setSearchedContacts] = useState(contacts)
	const [visible, setVisible] = useState(false)

	const handleUpdateContact = (contact) => {
		setContacts(contacts.map(item => item.id === contact.id ? contact : item))
		setVisible(false)
	}

	const handleDeleteContact = (id) => {
		setSearchedContacts(searchedContacts.filter(item => item.id !== id))
	}

	const handleSearch = (query) => {
		setSearchedContacts(contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()) | contact.surname.toLowerCase().includes(query.toLowerCase()) | contact.phone.toLowerCase().includes(query.toLowerCase())))
	}

	return (
		<div className={'container'}>
			<MyHeader/>
			<ContactsList
				contacts={searchedContacts}
				handleSearch={handleSearch}
				setCurrentContact={setCurrentContact}
				handleDeleteContact={handleDeleteContact}
				setVisible={setVisible}
			/>
			<a href="https://github.com/nikgosu">My GitHub account</a>
			<MyDialog
				visible={visible}
				setVisible={setVisible}
				handleUpdateContact={handleUpdateContact}
				currentContact={currentContact}
			/>
		</div>
	)
}

export default ContactsBook