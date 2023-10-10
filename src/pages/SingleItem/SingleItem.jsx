import './SingleItem.css';
import HeroSection from './HeroSection/HeroSection';
import CastSection from './CastSection/CastSection';
import VideoSection from './VideoSection/VideoSection';

const SingleItem=()=>{


    return (
        <div className='single-item'>
           <HeroSection />
           <CastSection />
           <VideoSection />
        </div>
    );
}
export default SingleItem;