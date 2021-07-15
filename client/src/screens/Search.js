import React, {useState} from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import axios from 'axios'


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Little Women')
    const [results, setResults] = useState([])
    const handleSubmit = (event) =>{
        event.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_BOOK_API}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            const upDated= data.items.map(item =>{
                const book={
                    title: item.volumeInfo.title,
                    description: item.volumeInfo.description,
                    link: item.volumeInfo.infoLink,
                    image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail :'',
                    authors: item.volumeInfo.authors.join(', ')
        
                }
                return book
            })
            setResults(upDated)
        })
    }
    const handleSave = (book)=>{
        console.log(book)
        axios.post('http://localhost:5000/api/books', book)
        .then(data =>{
            console.log(data, '=================')
        })
    }
    return (
        <div>
            <SearchBar searchTerm= {searchTerm} setSearchTerm= {setSearchTerm} handleSubmit= {handleSubmit}/>
            {results.map(book =>(
                <BookCard book= {book} buttonText= 'Save' buttonFunction= {handleSave}/>
            ))}
        </div>
    )
}

export default Search
