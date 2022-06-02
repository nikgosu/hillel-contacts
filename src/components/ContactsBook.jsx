import React from 'react'
import MyHeader from "./MyHeader"
import ContactsList from "./ContactsList"
import MyDialog from "./UI/MyDialog/MyDialog"

const ContactsBook = () => {

	return (
		<div className={'container'}>
			<MyHeader/>
			<ContactsList
			/>
			<a href="https://github.com/nikgosu">My GitHub account</a>
			<MyDialog
			/>
		</div>
	)
}

export default ContactsBook