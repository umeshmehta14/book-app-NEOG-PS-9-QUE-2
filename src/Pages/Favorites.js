import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Favorites = () => {
  const {books,HandleMarkAsRead,RemoveFromFav}  =useContext(DataContext);
  return (
    <div>
        <h1 className='book-heading'>Favorite Books</h1>
        <div className='book-page'>
        {
            books.filter(({fav})=> fav).map((item, index)=> {
                const {id,title ,author,image,read} = item;
            return <div className='book-detail' key={id}>
                <img src={image} alt="Picture Not Available" />
                <span>{index+1}</span>
                <p><strong>Title:</strong>{title}</p>
                <p><strong>Author:</strong>{author}</p>
                <button disabled={read} className='btn' onClick={()=>HandleMarkAsRead(item)} >{read?"Already read": "Mark As Read"}</button>
                <button className='btn' onClick={()=>RemoveFromFav(item)}>Remove From Fav</button>
                </div>
            })
        }
        </div>
        </div>
  )
}

export default Favorites
