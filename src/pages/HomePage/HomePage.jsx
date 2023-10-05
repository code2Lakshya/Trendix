import Cards from '../../components/Cards/Cards';
import HeroSection from './HeroSection/HeroSection';
import './HomePage.css';

const HomePage=()=>{
return(
    <div className='home-section'>
        <HeroSection />
        <Cards heading='Trending' url='/trending/all' categories={["day","week"]} front={false} />
    </div>
);
}
export default HomePage;