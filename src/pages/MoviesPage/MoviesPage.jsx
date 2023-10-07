import { useEffect, useState } from 'react';
import './MoviesPage.css';
import useFetch from '../../utilities/hooks/useFetch';
import useInfiniteScroll from '../../utilities/hooks/useInfiniteScroll';
import Loader from '../../components/loader/Loader'
import GenreFilter from '../../components/genreFilter/GenreFilter';

const MoviesPage = () => {
    const { returnData } = useFetch('');
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [showInfiniteLoader, setInfiniteLoader] = useState(false);
    const [category,setCategory]=useState([]);
    useInfiniteScroll( setPage,page, '.movies-container')
    useEffect(() => {
        page === 1 ? setShowLoader(true) : setInfiniteLoader(true);
        returnData(`/discover/movie?page=${page}`)
            .then(response => {
                if (page === 1) {
                    setData(response.results);
                    setShowLoader(false);
                }
                else {
                    setData(prev => ([...prev, ...response.results]))
                    setInfiniteLoader(false);
                }
            })
            .catch(error => console.log(error))
    }, [page])

    return (
        <div className='movie-page'>
                 <GenreFilter  filterFor='movie' setCategory={setCategory} category={category} />
            {
                showLoader ? <Loader className='loader' />: (data.length === 0 ? <p>No Data Found</p>
                        :(
                            <div className='movies-container'>
                                
                            </div>
                        )
                    )
            }
        </div>
    );
}
export default MoviesPage;