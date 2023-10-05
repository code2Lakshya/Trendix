import { LazyLoadImage } from "react-lazy-load-image-component";
import posterImg from '../../assets/no-poster.png';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { img_url, month } from "../../utilities/variables";
import { useSelector } from "react-redux";
import CircularRating from "../circularRating/CircularRating";
import './Card.css';

const Card = ({ data }) => {
    const genre = useSelector(state => state.genre)
    const fullDate = data?.release_date?.split('-') || data?.first_air_date?.split('-');
    const date = fullDate?.at(-1);
    const year = fullDate?.at(0);
    const mon = month[Number(fullDate?.at(1))];
    return (
        <div className="card">
            <div className="card-upper">
                <LazyLoadImage src={data?.poster_path ? (img_url + data.poster_path) : posterImg} alt='poster' effect="blur"  />
                    {genre && <span>{(genre[data?.media_type]?.find(element => element.id === data.genre_ids[0]))?.name}</span>}
             <span> <CircularRating rating={(data.vote_average).toFixed(1)}/></span>
            </div>
            <div className="card-lower">
                <p>{data?.original_title ?? data?.original_name}</p>
                <p>{`${mon} ${date}, ${year}`}</p>
            </div>
        </div>
    );
}
export default Card;