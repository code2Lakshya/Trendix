import './HeroSection.css';
import { useEffect, useState } from 'react';
import useFetch from '../../../utilities/hooks/useFetch';
import { img_url } from '../../../utilities/variables';
import { useNavigate } from 'react-router-dom';

let imgIndex;
const HeroSection = () => {
    const { data, fetchData } = useFetch('/movie/upcoming');
    const [search, setSearch] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        fetchData();
        imgIndex=Math.floor(Math.floor(Math.random()*20));
    }, [])
    const submitHandler=(e)=>{
        e.preventDefault();
        if(search.length>0)
        navigate('/search/'+search);
    }
    return (
        <div className='hero-container'>
            {data?.length > 0 && <img src={img_url + data[imgIndex].backdrop_path} alt='upcoming-poster' />}
            <div>
                <h1>Welcome</h1>
                <p>Millions of Movies,Tv shows and people to discover. Explore now.</p>
                <form className='hero-search' onSubmit={submitHandler}>
                    <input type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search for a Tv or movie show ....'
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        </div>
    );
}
export default HeroSection;