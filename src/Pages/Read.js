import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Read = () => {
  const {books} = useContext(DataContext);
  return (
    <div>
        <h1 className='book-heading'>Readed Books</h1>
        <div className='book-page'>
        {
            books.filter(({read})=> read).map((item, index)=> {
                const {id,title ,author,image} = item;
            return <div className='book-detail' key={id}>
                <img src={image} alt="Picture Not Available" />
                <span>{index+1}</span>
                <p><strong>Title:</strong>{title}</p>
                <p><strong>Author:</strong>{author}</p>
                </div>
                
            })
        }
        </div>
        </div>
  )
}

export default Read
