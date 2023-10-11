import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../../utilities/hooks/useFetch";
import { img_url } from "../../../utilities/variables";
import ShimmerHero from "./ShimmerHero/ShimmerHero";
import CircularRating from "../../../components/circularRating/CircularRating";
import PlayBtn from "../../../components/Playbtn/PlayBtn";
import './HeroSection.css';
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {
    const { id } = useParams();
    const location = useLocation();
    const { returnData, loader } = useFetch(``);
    const [data, setData] = useState(null);
    const {credits}=useSelector(state => state.movie);

    useEffect(() => {
        returnData(`/${(location.pathname?.split('/'))?.at(-2)}/${id}`)
            .then(response => setData(response))
            .catch(err => setData(null))
    }, [location.pathname])

    if (loader)
        return <ShimmerHero />;

    if (data === null)
        return <p>No Data Found</p>;

    const { backdrop_path, poster_path, title, original_title, release_date, genres, tagline, vote_average, overview, status, runtime } = data;
    const hour = (Number(runtime) / 60).toFixed(0);
    const min = (Number(runtime)) - hour * 60;
    const director=credits?.crew?.find(item => item?.known_for_department==='Directing')?.name;
    const writer=credits?.crew?.find(item => item?.known_for_department==='Writing')?.name;
    
    return (
        <div className="hero-wrapper">
            {data && <img src={img_url + backdrop_path} alt='background-poster' />}
            <div className="hero-content">
                <LazyLoadImage src={img_url + poster_path} alt='poster' effect="blur"/>
                <div className="hero-right">
                    <h2>{`${title || original_title}(${release_date?.split('-')?.at(0)})`}</h2>
                    <p><i>{tagline}</i></p>
                    {
                        genres &&
                        <div className="hero-genres">
                            {genres.map(item => <span key={item.id}>{item.name}</span>)}
                        </div>
                    }
                    <div className="hero-rating"> {/* On click open player component with the given Link  */}
                        <CircularRating rating={vote_average?.toFixed(1)} className='rating' />
                        <div className="playbtn">
                            <PlayBtn />
                            <span>Watch Trailer</span>
                        </div>
                    </div>
                    <p>Overview</p>
                    <p id='overview'>{overview}</p>
                    <div className="movie-details">
                        <p><span className="primary">Status: </span><span className="secondary">{status}</span></p>
                        <p><span className="primary">Release Date: </span><span className="secondary">{release_date}</span></p>
                        <p>
                            <span className="primary">Runtime: </span>
                            <span className="secondary">
                                {`${hour > 0 ? hour + 'h' : ''} ${min > 0 ? min + 'mins' : ''}`}
                            </span>
                        </p>
                    </div>
                    <p>
                        <span className="primary">Director:</span>
                        <span className="secondary">{director}</span>
                    </p>
                    <p>
                        <span className="primary">Writer:</span>
                        <span className="secondary">{writer}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;