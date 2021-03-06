import axios from 'axios'
import React, {useState, useEffect} from 'react'
import BookCard from '../components/BookCard'

const Saved = () => {
    const [results, setResults] = useState([])
    const [deleteSuccess, setDeleteSuccess]= useState(false)

    useEffect(()=>{
        fetch('/api/books')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setResults(data)
        })
        if(deleteSuccess){
            setDeleteSuccess(false)
        }
    },[deleteSuccess])

   
    const handleDelete = (book)=>{
        axios.delete(`/api/books/${book._id}`)
        .then(data =>{
            console.log(data)
            setDeleteSuccess(true)
        })
    }
    return (
        <div className= 'content'>
            <div className= 'Hero'></div>
           {results.map(book =>(
                <BookCard book= {book} buttonText= 'Delete' buttonFunction= {handleDelete}/>
            ))}
        </div>
    )
}

export default Saved
