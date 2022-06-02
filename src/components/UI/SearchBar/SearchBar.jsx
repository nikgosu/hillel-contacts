import React, {useContext, useEffect, useState} from 'react'
import {ContextApp} from "../../../reducers"

const SearchBar = () => {

	const [searchQuery, setSearchQuery] = useState('')
	const {dispatch} = useContext(ContextApp)

	useEffect(() => {
		dispatch({type: 'SEARCHED_CONTACTS', payload: searchQuery})
	}, [searchQuery, dispatch])

	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			className={'search'}
			placeholder={'Search'}
		/>
	)
}

export default SearchBar