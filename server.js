import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path';
import cors from 'cors';
import colors from 'colors'
import routes from './routes/index.js';
import axios from 'axios'


const PORT = process.env.PORT || 5000;

dotenv.config()
mongoose.connect(
  process.env.MONGODB_URI,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
  },
);
const app = express();
app.use(express.json())
app.use(cors());

app.use('/api', routes);
app.post('/search', (req, res)=>{
  const {searchTerm}= req.body
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_BOOK_API}`)
        .then(response =>{
            console.log(response.data)
            const upDated= response.data.items.map(item =>{
                const book={
                    title: item.volumeInfo.title,
                    description: item.volumeInfo.description,
                    link: item.volumeInfo.infoLink,
                    image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail :'',
                    authors: item.volumeInfo.authors.join(', ')
        
                }
                return book
            })
            res.status(201).send(upDated)
          })
          .catch(error =>{
            console.log(error)
            res.status(400).send('Something went wrong')
          })
})

 

if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.resolve(__dirname, './client/build')))
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  })
}


app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));