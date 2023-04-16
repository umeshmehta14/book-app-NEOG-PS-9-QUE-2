
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import AllBooks from './Pages/AllBooks';
import Favorites from './Pages/Favorites';
import Read from './Pages/Read';
import Profile from './Pages/Profile';
import { useContext } from 'react';
import { DataContext } from './Contexts/DataProvider';
import Error from './Pages/Error';

function App() {
  const {error, loading} = useContext(DataContext);
  return (
    <div className="App">
            {loading ?"Loading....": <Header/>}
      <Routes>
        {error ?<Route path="/" element={<Error/>}/>: <Route path="/" element={<AllBooks/>}/> }
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
