import React from 'react'
import { NavLink } from 'react-router-dom';

const DisplayDetails = ({item,index,HandleFavorite,HandleMarkAsRead}) => {
    const {title ,author,image,fav,read} = item;

  return (
    <>
        {
             <div className='book-detail'>
                <img src={image} alt="Picture Not Available" />
                <span>{index+1}</span>
                <p><strong>Title:</strong>{title}</p>
                <p><strong>Author:</strong>{author}</p>
                <button disabled={read} className='btn' onClick={()=>HandleMarkAsRead(item)} >{read?"Already read": "Mark As Read"}</button>
                {fav ? <button className='btn'> <NavLink className="nav-link" to="/favorites">Go to Fav</NavLink></button>:
                    <button  className='btn' onClick={()=>HandleFavorite(item)}>Add to Fav</button>
                }
                </div>
            }
    </>
  )
}

export default DisplayDetails
