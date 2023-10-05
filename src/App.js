import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import { useEffect } from 'react';
import useFetch from './utilities/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addGenre } from './utilities/redux/Slices/genreSlice';

function App() {
  const {returnData}=useFetch('');
  const dispatch=useDispatch();
  useEffect(()=>{
    returnData('/genre/tv/list')
    .then(response => dispatch(addGenre({tv: response.genres})))
    returnData('/genre/movie/list')
    .then(response => dispatch(addGenre({movie: response.genres})))
  },[])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/explore/movie' element={<h1>Movies Page</h1>}/>
        <Route path='/explore/tv' element={<h1>Tv Shows Page</h1>}/>
        <Route path='/search/:searchId' element={<h1>Search Page</h1>}/>
        <Route path='/movie/:movieId' element={<h1>Single Movie Page</h1>}/>
        <Route path='/tv/:tvId' element={<h1>Single Tv Page</h1>}/>
        <Route path='*' element={<h1>No Page Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
