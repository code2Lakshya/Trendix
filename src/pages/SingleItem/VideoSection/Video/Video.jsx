import { LazyLoadImage } from "react-lazy-load-image-component";
import { yt_imgUrl } from "../../../../utilities/variables";
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlayBtn from "../../../../components/Playbtn/PlayBtn";
import './Video.css';
import { useDispatch, useSelector } from "react-redux";
import { setVideoSrc, togglePlayer } from "../../../../utilities/redux/Slices/movieitemSlice";

const Video = ({ data }) => {
    const src = yt_imgUrl.replace('<key>', data.key);
    const {showVideoPlayer}=useSelector(state => state.movie);
    const dispatch=useDispatch();

    const clickHandler=()=>{
        dispatch(setVideoSrc(data?.key));
        dispatch(togglePlayer(true));
    }

    return (
        <div className="video-wrapper">
            <div className="video" onClick={clickHandler}>
                <LazyLoadImage src={src} alt='thumbnail' effect="blur" />
                <PlayBtn />
            </div>
            <p>{data?.name}</p>
        </div>
    );
}
export default Video;