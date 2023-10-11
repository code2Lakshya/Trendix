import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../utilities/hooks/useFetch';
import ShimmerCards from '../../../components/ShimmerCards/ShimmerCards';
import Card from '../../../components/Card/Card';
import './SingleItemCards.css';

const SingleItemCards = ({ heading , url }) => {
    const location = useLocation();
    const { returnData ,loader } = useFetch('');
    const [data, setData] = useState(null);

    useEffect(() => {
        returnData(location.pathname + url)
            .then(response => setData(response.results))
            .catch(error => console.log(error));
    }, [location.pathname])

    useEffect(() => {
        const resize = () => {
            !loader && document.querySelector(`.${heading.replaceAll(' ', '-').replaceAll("'", "")}`).scroll(0, 0);
        }
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    const slideHandler = (direction) => {
        console.log('pressed');
        const width = document.querySelector(`.${heading.replaceAll(' ', '-')}`).offsetWidth;
        console.log(width);
        document.querySelector(`.${heading.replaceAll(' ', '-')}`).scrollBy(direction === 'left' ? -width : width, 0);
    }

    return (
        <div className='single-cards-container'>
               { data?.length > 0 && <h1>{heading}</h1> }
            <span className={`single-cards-button btn1 ${loader||data?.length===0 ? 'hide':''}`}><AiOutlineLeftCircle onClick={() => slideHandler('left')} /></span>
            {
                loader ? <ShimmerCards className='cards'/> : data !== null &&
                    <div className={`single-cards-wrapper ${heading.replaceAll(' ', '-')}`}>
                        <div className='single-cards'>
                            {
                                data?.map(item => <Card key={item.id} data={item} card_type={location.pathname.split('/').at(-2)} className='single-card'/>)
                            }
                        </div>
                    </div>
            }

            <span className={`single-cards-button btn2 ${loader || data?.length===0 ? 'hide':''}`}><AiOutlineRightCircle onClick={() => slideHandler('right')} /></span>
        </div>
    );
}
export default SingleItemCards;