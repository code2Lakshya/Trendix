import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import { useEffect, lazy, Suspense, useState } from 'react';
import useFetch from './utilities/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addGenre } from './utilities/redux/Slices/genreSlice';
import Loader from './components/loader/Loader';
import useOnline from './utilities/hooks/useOnline';
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const SingleItem = lazy(()=> import('./pages/SingleItem/SingleItem'))

function App() {
  const { returnData } = useFetch('');
  const dispatch = useDispatch();
  const status =useOnline();
  const location=useLocation();

  useEffect(() => {
    returnData('/genre/tv/list')
      .then(response => dispatch(addGenre({ tv: response?.genres })))
      .catch(err => console.log('network error'));
    returnData('/genre/movie/list')
      .then(response => dispatch(addGenre({ movie: response?.genres })))
      .catch(err => console.log('network error'));
  }, [location.pathname])

  if (!status) {
    return <div className='network-container'>
      <p>No Network Available </p>
      <p>Contact Your Network Administrator</p>
    </div>
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route
          path='/'
          element={<HomePage />}
        />

        <Route
          path='/explore/movie'
          element={<Suspense fallback={<Loader className='loader' />}><MoviesPage exploreType='movie' key='1' /></Suspense>}
        />

        <Route
          path='/explore/tv'
          element={<Suspense fallback={<Loader className='loader' />}><MoviesPage exploreType='tv' key='2' /></Suspense>}
        />

        <Route
          path='/search/:searchId'
          element={<Suspense fallback={<Loader className='loader' />}><SearchPage /></Suspense>}
        />

        <Route
          path='/movie/:id'
          element={<Suspense fallback={<Loader className='loader'/>}><SingleItem key='1' /></Suspense>}
        />

        <Route
          path='/tv/:id'
          element={<Suspense fallback={<Loader className='loader' />}><SingleItem key='2' /></Suspense>}
        />

        <Route
          path='*'
          element={<h1 id='wrong-page'><span>No Page Found</span></h1>}
        />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
