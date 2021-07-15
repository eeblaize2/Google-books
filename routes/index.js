import express from 'express';
import Book from '../models/bookModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router();

router.get('/books', asyncHandler(async (req, res)=>{
   const books= await Book.find({})
   res.status(200).json(books) 
}))

router.post('/books', asyncHandler(async (req, res)=>{
    console.log(req.body)
    const createdBook= new Book(req.body)
    const savedBook= await createdBook.save()
    res.status(201).json(savedBook)
}))

router.delete('/books/:id', asyncHandler(async (req, res)=>{
    const book= await Book.findById(req.params.id)
    if (book){
        await book.remove()
        res.status(200).send('Book Deleted')
    } else{
        res.status(404).send('Book Not Found')
    }
}))

export default router;