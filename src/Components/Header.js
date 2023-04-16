import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../Contexts/DataProvider'

const Header = () => {
  const {books} = useContext(DataContext);
  return (
    <nav>
      <NavLink  to="/">All Books</NavLink>
      <NavLink to="/favorites">Favorites{books.filter(({fav})=> fav).length > 0 && `(${books.filter(({fav})=> fav).length})`}</NavLink>
      <NavLink to="/read">Read</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}

export default Header
