import { LazyLoadImage } from 'react-lazy-load-image-component';
import avatar from '../../../../assets/avatar.png'
import { img_url } from '../../../../utilities/variables';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Cast.css';

const Cast = ({ data }) => {
    const { profile_path, original_name, character } = data;
    return (
        <div className="cast">
            <div className={profile_path ? 'img':'no-img'}>
                <LazyLoadImage src={profile_path ? img_url + profile_path : avatar} alt='author' effect='blur' />
            </div>
            <div className='cast-detail'>
                <p>{original_name}</p>
                <p>{character}</p>
            </div>
        </div>
    );
}
export default Cast;