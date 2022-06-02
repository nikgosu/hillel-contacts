import React, {useContext, useEffect, useState} from 'react'
import {ContextApp} from "../../../reducers"

const MyDialog = () => {

	const {state, dispatch} = useContext(ContextApp)
	const [updatedContact, setUpdatedContact] = useState(state.currentContact)

	const handleChangeContact = (e) => {
		setUpdatedContact({...updatedContact, [e.target.name]: e.target.value})
	}

	useEffect(() => {
		setUpdatedContact(state.currentContact)
	}, [state.currentContact])

	return (
		<div
			className={state.visible ? 'my-dialog my-dialog_visible' : 'my-dialog'}
			onClick={() => dispatch({type: 'VISIBLE', payload: false})}
		>
			<div
				className="dialog_content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="dialog_header">
					<p>Edit contact: <strong>{updatedContact.name} {updatedContact.surname}</strong></p>
					<p
						onClick={() => dispatch({type: 'VISIBLE', payload: false})}
					>X</p>
				</div>
				<div className="dialog_body">
					<span></span>
					<div className="dialog_actions">
						<label htmlFor="name">First name</label>
						<input
							onChange={handleChangeContact}
							value={updatedContact.name}
							name={'name'}
							id={'name'}
							type="text"
						/>
						<label htmlFor="surname">Last name</label>
						<input
							onChange={handleChangeContact}
							value={updatedContact.surname}
							name={'surname'}
							id={'surname'}
							type="text"
						/>
						<label htmlFor="phone">Phone number</label>
						<input
							onChange={handleChangeContact}
							value={updatedContact.phone}
							name={'phone'}
							id={'phone'}
							type="text"
						/>
						<button onClick={() => {
							dispatch({type: 'UPDATE', payload: updatedContact})
							dispatch({type: 'VISIBLE', payload: false})
						}}>Save</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyDialog;