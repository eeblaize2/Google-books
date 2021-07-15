import React from "react";

const BookCard = ({ book, buttonText, buttonFunction }) => {
  return (
    <div className='book-card'>
      <div className= 'book-top'>
            <div className= 'book-author'>
                <h3>{book.title}</h3>
                <h5>{book.authors}</h5>
            </div>
            <div className= 'book-buttons'>
                <a href= {book.link} target= '_blank' rel= 'noreferrer'>View</a>
                <button onClick= {()=> buttonFunction(book)}>{buttonText}</button>
            </div>

      </div>
      <div className= 'book-bottom'>
          <img src= {book.image} alt= {book.title} />
          <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
