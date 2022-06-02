import {createContext} from "react"

export const ContextApp = createContext()

export const InitialState = {
	contacts: [
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
	],
	searchedContacts: [
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
	],
	currentContact: {},
	visible: false
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'CURRENT_CONTACT' :
			return {...state, currentContact: action.payload}
		case 'SEARCHED_CONTACTS' :
			return {...state, searchedContacts: state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()) | contact.surname.toLowerCase().includes(action.payload.toLowerCase()) | contact.phone.toLowerCase().includes(action.payload.toLowerCase()))}
		case 'VISIBLE' :
			return {...state, visible: action.payload}
		case 'DELETE' :
			return {...state, searchedContacts: state.searchedContacts.filter(item => item.id !== action.payload)}
		case 'UPDATE' :
			return {...state, searchedContacts: state.searchedContacts.map(item => item.id === action.payload.id ? action.payload : item)}
		default :
			return {...state}
	}
}