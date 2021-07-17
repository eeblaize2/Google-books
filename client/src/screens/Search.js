import React, {useState} from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import axios from 'axios'


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const handleSubmit = (event) =>{
        event.preventDefault()
       axios.post('http://localhost:5000/search', {searchTerm}) 
       .then(response =>{
           console.log(response.data)
           setResults(response.data)
       })
           
        
    }
    const handleSave = (book)=>{
        console.log(book)
        axios.post('http://localhost:5000/api/books', book)
        .then(data =>{
        })
    }
    return (
        <div className= 'content'>
            <div className= 'Hero'></div>
            <SearchBar searchTerm= {searchTerm} setSearchTerm= {setSearchTerm} handleSubmit= {handleSubmit}/>
            {results.map(book =>(
                <BookCard book= {book} buttonText= 'Save' buttonFunction= {handleSave}/>
            ))}
        </div>
    )
}

export default Search
