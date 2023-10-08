import { useEffect, useState } from 'react';
import './SearchPage.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../utilities/hooks/useFetch';
import Loader from '../../components/loader/Loader';
import Card from '../../components/Card/Card';
import useInfiniteScroll from '../../utilities/hooks/useInfiniteScroll';

const SearchPage = () => {
    const { searchId } = useParams();
    const { returnData } = useFetch('');
    const [loader, setLoader] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [page, setPage] = useState(1);
    const [infiniteScroll, setInfiniteScroll] = useState(false);
    useInfiniteScroll(setPage, page, '.search-container');

    useEffect(()=>{
        window.scroll(0,0);
        setPage(1);
    },[searchId])
    useEffect(() => {
        page === 1 ?setLoader(true): setInfiniteScroll(true);
            returnData(`/search/multi?query=${searchId}&page=${page}`)
                .then(response => {
                    if(page===1){
                        setSearchResult(response.results);
                        setLoader(false);
                    }
                    else{
                    setInfiniteScroll(false);
                    setSearchResult(prev => ([...prev, ...response.results]))
                    }
                })
                .catch(error => console.log(error))
    }, [page,searchId])

    return (
        <div className='search-wrapper'>
            {
                loader ? (<Loader className='loader' />) : searchResult.length === 0 ? (<p style={{ textAlign: 'center' }}>No Data Found</p>)
                    : (
                        <div className='search-container'>
                            <h1>Search results of '{searchId}'</h1>
                            <div className='search-cards'>
                                {
                                    searchResult.filter(element => element.release_date || element.first_air_date)
                                        .map(item => <Card data={item} key={item.id} className='search-card search' />)
                                }
                            </div>
                            {
                                infiniteScroll && <Loader className='load' />
                            }
                        </div>
                    )
            }
        </div>
    );
}
export default SearchPage;