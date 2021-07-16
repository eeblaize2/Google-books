import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Google Books</h1>
      <Link to='/'>Search</Link>
      <Link to='/saved'>Saved</Link>
    </header>
  )
}

export default Header
