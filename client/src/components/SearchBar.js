import React from 'react'

const SearchBar = ({searchTerm, setSearchTerm, handleSubmit}) => {
    return (
        <form onSubmit= {handleSubmit}>
            <input type='text' value= {searchTerm} onChange= {(event)=>setSearchTerm(event.target.value)}/>
            <input type= 'submit' value= 'Search'/>
        </form>
    )
}

export default SearchBar
