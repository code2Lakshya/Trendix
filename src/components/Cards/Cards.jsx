import { useEffect, useState } from 'react';
import useFetch from '../../utilities/hooks/useFetch';
import Card from '../Card/Card';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import ShimmerCards from '../ShimmerCards/ShimmerCards';
import './Cards.css';

const Cards = ({ heading, categories, url, front }) => {
    const [category, setCategory] = useState(categories[0]);
    const { data, fetchData, loader } = useFetch(!front ? `${url}/${category}` : `/${category}${url}`);

    useEffect(() => {
        fetchData();
    }, [category])

    useEffect(() => {
        const resize = () => {
            !loader && document.querySelector(`.${heading.replaceAll(' ', '-').replaceAll("'", "")}`).scroll(0, 0);
        }
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    const clickHandler = (item) => {
        if (item !== category)
            setCategory(item);
    }

    const slideHandler = (direction) => {
        console.log('pressed');
        const width = document.querySelector(`.${heading.replaceAll(' ', '-').replaceAll("'", "")}`).offsetWidth;
        console.log(width);
        document.querySelector(`.${heading.replaceAll(' ', '-').replaceAll("'", "")}`).scrollBy(direction === 'left' ? -width : width, 0);
    }

    return (
        <div className='cards-container'>
            <div className='cards-heading'>
                <h1>{heading}</h1>
                <div className='cards-btn'>
                    <button className={category === categories[0] ? 'active' : ''} onClick={(e) => clickHandler(categories[0])}>{categories[0]}</button>
                    <button className={category === categories[1] ? 'active' : ''} onClick={(e) => clickHandler(categories[1])}>{categories[1]}</button>
                </div>
            </div>
            <span className='cards-button'><AiOutlineLeftCircle onClick={() => slideHandler('left')} /></span>
            <div className={`cards-wrapper ${heading.replaceAll(' ', '-').replaceAll("'", "")}`}>
                {
                    !loader ?
                        (
                            data.length > 0 ?
                                (
                                    <div className='cards'>
                                        {
                                            data.map(item => <Card data={item} key={item.id} card_type={category} />)
                                        }
                                    </div>
                                )
                                : (<p>No data Found ...</p>)
                        )
                        : (<ShimmerCards className='cards' />)
                }
            </div>
            <span className='cards-button'><AiOutlineRightCircle onClick={() => slideHandler('right')} /></span>
        </div>
    );
}
export default Cards;