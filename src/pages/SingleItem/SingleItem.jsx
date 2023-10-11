import './SingleItem.css';
import HeroSection from './HeroSection/HeroSection';
import CastSection from './CastSection/CastSection';
import VideoSection from './VideoSection/VideoSection';
import { useLocation } from 'react-router-dom';
import SingleItemCards from './SingleItemCards/SingleItemCards';

const SingleItem=()=>{

    return (
        <div className='single-item'>
           <HeroSection />
           <CastSection />
           <VideoSection />
           <SingleItemCards heading='Recommendations' url='/recommendations'/>
           <SingleItemCards heading='Similar Videos' url='/similar'/>
        </div>
    );
}
export default SingleItem;