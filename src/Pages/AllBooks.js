import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'
import DisplayDetails from '../Components/DisplayDetails';

const AllBooks = () => {
    const {books,HandleFavorite,HandleMarkAsRead} = useContext(DataContext);
  return (
    <div>
        <h1 className='book-heading'>All Books</h1>
        <div className='book-page'>
        {
            books.map((item, index)=> {
                const {id} = item;
            return <DisplayDetails key={id} item={item} index={index} HandleFavorite={HandleFavorite} HandleMarkAsRead={HandleMarkAsRead}/>
            })
        }
        </div>
    </div>
  )
}

export default AllBooks
