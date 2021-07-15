import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  
  },
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    
  },
  authors:  {
    type: String,
    required: true,
    
  },
},
{
  timestamps: true
})



const Book = mongoose.model('Book', bookSchema);

export default Book;