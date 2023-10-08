import { useEffect, useState } from 'react';
import './MoviesPage.css';
import useFetch from '../../utilities/hooks/useFetch';
import useInfiniteScroll from '../../utilities/hooks/useInfiniteScroll';
import Loader from '../../components/loader/Loader'
import GenreFilter from '../../components/genreFilter/GenreFilter';
import Card from '../../components/Card/Card';
import SortFilter from '../../components/sortFilter/SortFilter';

const MoviesPage = ({ exploreType }) => {
    const { returnData } = useFetch('');
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [showInfiniteLoader, setInfiniteLoader] = useState(false);
    const [category, setCategory] = useState([]);
    const [sortFilter, setSortFilter] = useState(null);
    useInfiniteScroll(setPage, page, '.movies-container')

    useEffect(() => {
        window.scroll(0, 0);
        setPage(1);
    }, [category])
    useEffect(() => {
        const catFilter = category?.length > 0 && category.map(item => item.id).join(',');
        page === 1 ? setShowLoader(true) : data.length > 0 && setInfiniteLoader(true);
        const url = `/discover/${exploreType}?page=${page}${catFilter ? '&with_genres=' + catFilter : ''}${sortFilter ? '&sort_by=' + sortFilter.value : ''}`;
        returnData(url)
            .then(response => {
                if (response) {
                    if (page === 1) {
                        setData(response?.results);
                        setShowLoader(false);
                    }
                    else {
                        setData(prev => ([...prev, ...response?.results]))
                        setInfiniteLoader(false);
                    }
                }
            })
            .catch(error => console.log(error))
    }, [page, category, sortFilter])
    return (
        <div className='movie-page movies-container'>
            <div className='movie-heading'>
                <h1>Explore {exploreType === 'movie' ? "Movies" : "Tv Shows"}</h1>
                <div className='movie-filters'>
                    <GenreFilter filterFor={exploreType} setCategory={setCategory} category={category} />
                    <SortFilter sortfilter={sortFilter} setSortFilter={setSortFilter} />
                </div>
            </div>
            {
                showLoader ? <Loader className='loader' /> : (data?.length === 0 ? <p>No Data Found</p>
                    : (
                        <div className='search-cards'>
                            {
                                data?.filter(item => item.release_date || item.first_air_date)
                                    ?.map(item => <Card data={item} key={item.id} className='search-card movie-card' />)
                            }
                        </div>
                    )
                )
            }
            {
                showInfiniteLoader && <Loader className='load' />
            }
        </div>
    );
}
export default MoviesPage;