import Cards from '../../components/Cards/Cards';
import HeroSection from './HeroSection/HeroSection';
import './HomePage.css';

const HomePage=()=>{
return(
    <div className='home-section'>
        <HeroSection />
        <Cards heading='Trending' url='/trending/all' categories={["day","week"]} front={false} />
        <Cards heading='Top Rated' url='/top_rated' categories={['movie','tv']} front={true}/>
        <Cards heading="What's Popular" url='/popular' categories={['movie','tv']} front={true}/>
    </div>
);
}
export default HomePage;