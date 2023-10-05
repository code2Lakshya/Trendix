import { useEffect, useState } from 'react';
import './Cards.css'
import useFetch from '../../utilities/hooks/useFetch';
import Card from '../Card/Card';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'

let d = 0;
const Cards = ({ heading, categories, url, front }) => {
    const [category, setCategory] = useState(categories[0]);
    const { data, fetchData, loader } = useFetch(!front ? `${url}/${category}` : `/${category}${url}`);
    const [c, setC] = useState(0);
    useEffect(() => {
        fetchData();
        d = window.innerWidth > 1027 ? 3 : 4;
    }, [category])
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1027) {
                d = 3;
                setC(0);
            }
            if (window.innerWidth > 770 && window.innerWidth < 1027) {
                d = 4;
                setC(0);
            }
        })
    }, [])
    const clickHandler = (item) => {
        if (item !== category)
            setCategory(item);
    }
    const slideHandler = (direction) => {
        console.log('pressed');
        if (direction === 'left' && c !== 0)
            setC(c - 1);
        if (direction === 'right' && c < d)
            setC(c + 1);
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
            <div className='cards-wrapper'>
                <span className='cards-button'><AiOutlineLeftCircle onClick={() => slideHandler('left')} /></span>
                {
                    !loader ?
                        (
                            data.length > 0 ?
                                (
                                    <div className='cards' style={{ transform: `translateX(-${c}00%)` }}>
                                        {
                                            data.map(item => <Card data={item} key={item.id} />)
                                        }
                                    </div>
                                )
                                : (<p>No data Found ...</p>)
                        )
                        : (<p>Shimmer</p>)
                }
                <span className='cards-button'><AiOutlineRightCircle onClick={() => slideHandler('right')} /></span>
            </div>
        </div>
    );
}
export default Cards;