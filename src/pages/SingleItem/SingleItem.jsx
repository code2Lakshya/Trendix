import './SingleItem.css';
import HeroSection from './HeroSection/HeroSection';
import CastSection from './CastSection/CastSection';
import VideoSection from './VideoSection/VideoSection';
import { useLocation } from 'react-router-dom';
import SingleItemCards from './SingleItemCards/SingleItemCards';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { togglePlayer } from '../../utilities/redux/Slices/movieitemSlice';

const SingleItem = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(togglePlayer(false));
    }, [])

    return (
        <div className='single-item'>
            <HeroSection />
            <CastSection />
            <VideoSection />
            <SingleItemCards heading='Recommendations' url='/recommendations' />
            <SingleItemCards heading='Similar Videos' url='/similar' />
            <VideoPlayer />
        </div>
    );
}
export default SingleItem;