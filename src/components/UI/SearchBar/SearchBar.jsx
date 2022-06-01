import React, {useEffect, useState} from 'react'

const SearchBar = ({dispatch}) => {

	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		dispatch({type: 'SEARCHED_CONTACTS', payload: searchQuery})
	}, [searchQuery])

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