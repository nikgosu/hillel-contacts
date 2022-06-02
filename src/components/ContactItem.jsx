import React, {useContext} from 'react'
import {ContextApp} from "../reducers"

const ContactItem = ({contact}) => {

	const {dispatch} = useContext(ContextApp)

	return (
		<div className={'contact_item'}>
			<span></span>
			<div className={'contact_info'}>
				<div>{contact.name} {contact.surname}</div>
				<p>{contact.phone}</p>
			</div>
			<div className={'contact_actions'}>
				<button onClick={() => {
					dispatch({type: 'CURRENT_CONTACT', payload: contact})
					dispatch({type: 'VISIBLE', payload: true})
				}}>✍️</button>
				<button onClick={() => dispatch({type: 'DELETE', payload: contact.id})}>🗑</button>
			</div>
		</div>
	)
}

export default ContactItem