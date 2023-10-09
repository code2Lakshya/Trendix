import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../../utilities/hooks/useFetch";
import { img_url } from "../../../utilities/variables";
import ShimmerHero from "./ShimmerHero/ShimmerHero";
import CircularRating from "../../../components/circularRating/CircularRating";
import PlayBtn from "../../../components/Playbtn/PlayBtn";
import './HeroSection.css';

const HeroSection = () => {
    const { id } = useParams();
    const location = useLocation();
    const { returnData, loader } = useFetch(``);
    const [data, setData] = useState(null);

    useEffect(() => {
        returnData(`/${(location.pathname?.split('/'))?.at(-2)}/${id}`)
            .then(response => setData(response))
            .catch(err => setData(null))
    }, [])

    if (loader)
        return <ShimmerHero />;

    if (data === null)
        return <p>No Data Found</p>;

    const { backdrop_path, poster_path, title, original_title, release_date, genres, tagline, vote_average, overview, status, runtime } = data;
    const hour = (Number(runtime) / 60).toFixed(0);
    const min = (Number(runtime)) - hour * 60;
    return (
        <div className="hero-wrapper">
            {data && <img src={img_url + backdrop_path} alt='background-poster' />}
            <div className="hero-content">
                <img src={img_url + poster_path} alt='poster' />
                <div className="hero-right">
                    <h2>{`${title || original_title}(${release_date?.split('-')?.at(0)})`}</h2>
                    <p><i>{tagline}</i></p>
                    {
                        genres &&
                        <div className="hero-genres">
                            {genres.map(item => <span key={item.id}>{item.name}</span>)}
                        </div>
                    }
                    <div className="hero-rating">
                        <CircularRating rating={vote_average?.toFixed(1)} className='rating' />
                        <div className="play-btn">
                            <PlayBtn />
                            <span>Watch Trailer</span>
                        </div>
                    </div>
                    <p>Overview</p>
                    <p>{overview}</p>
                    <div className="movie-details">
                        <p><span>Status: </span><span>{status}</span></p>
                        <p><span>Release Date: </span><span>{release_date}</span></p>
                        <p>
                            <span>Runtime: </span>
                            <span>
                                {`${hour > 0 ? hour + 'h' : ''} ${min > 0 ? min + 'mins' : ''}`}
                            </span>
                        </p>
                    </div>
                    <p>
                        <span>Director:</span>
                        <span></span>{/* write the director name from credits data*/}
                    </p>
                    <p>
                        <span>Writer:</span>
                        <span></span>{/* write the writer name from credits data*/}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;