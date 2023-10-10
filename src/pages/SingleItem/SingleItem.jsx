import './SingleItem.css';
import HeroSection from './HeroSection/HeroSection';
import CastSection from './CastSection/CastSection';

const SingleItem=()=>{


    return (
        <div className='single-item'>
           <HeroSection />
           <CastSection />
        </div>
    );
}
export default SingleItem;