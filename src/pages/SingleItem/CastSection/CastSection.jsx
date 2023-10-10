import { useEffect } from 'react';
import './CastSection.css';
import useFetch from '../../../utilities/hooks/useFetch';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCredits } from '../../../utilities/redux/Slices/movieitemSlice';
import Cast from './Cast/Cast';
import CastShimmer from './CastShimmer/CastShimmer';


const CastSection = () => {
    const { loader, returnData } = useFetch('');
    const dispatch = useDispatch();
    const { credits } = useSelector(state => state.movie);
    const location = useLocation();


    useEffect(() => {
        returnData(`${location.pathname}/credits`)
            .then(response => dispatch(addCredits(response)))
            .catch(error => console.log(error))
    }, [location.pathname])

    if (loader) 
        return <CastShimmer />

    if(credits===null)
     return <p></p>;    

    return (
        <div className="cast-wrapper">
            <h1>Top Cast</h1>
            <div className='cast-list'>
                {
                    credits &&
                    credits?.cast?.map(item => <Cast key={item.id} data={item} />)
                }
            </div>
        </div>
    );
}
export default CastSection;