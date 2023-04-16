import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from '../Data/Data';

export const DataContext = createContext();
export const DataProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [userDetail, setUserDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/books");
            setBooks(response.data.books)
            setUserDetail(response.data.user);
            setLoading(false);
            setError(false)
        } catch (err) {
            setError(err);
            setLoading(false);

        }
    }

    const HandleFavorite = (item)=>{
        const favAdded = books.map((element)=> element.id === item.id ? {...element, fav:true}: element);
        setBooks(favAdded);
    }
    const RemoveFromFav = (item)=>{
        const favRemoved = books.map((element)=> element.id === item.id ? {...element, fav:false}: element);
        setBooks(favRemoved);
    }
    const HandleMarkAsRead = (item)=>{
        const readAdded = books.map((element)=> element.id === item.id ? {...element, read:true}: element);
        setBooks(readAdded);
    }

    useEffect(()=>{
        getData()
    },[]);
  return (
    <DataContext.Provider value={{error, loading, books,HandleFavorite,HandleMarkAsRead,userDetail,RemoveFromFav}}>
        {children}
    </DataContext.Provider>
  )
}


