import { LazyLoadImage } from "react-lazy-load-image-component";
import { yt_imgUrl } from "../../../../utilities/variables";
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlayBtn from "../../../../components/Playbtn/PlayBtn";
import './Video.css';

const Video = ({ data }) => {
    const src = yt_imgUrl.replace('<>', data.key)
    return (
        <div className="video-wrapper">
            <div className="video">{/* Add onClick event for opening yt player */}
                <LazyLoadImage src={src} alt='thumbnail' effect="blur" />
                <PlayBtn />
            </div>
            <p>{data?.name}</p>
        </div>
    );
}
export default Video;