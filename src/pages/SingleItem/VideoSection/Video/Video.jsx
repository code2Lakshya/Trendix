import { LazyLoadImage } from "react-lazy-load-image-component";
import { yt_imgUrl } from "../../../../utilities/variables";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Video=({data})=>{
    const src=yt_imgUrl.replace('<>',data.key)
return(
    <div className="video-wrapper">
        <LazyLoadImage src={src} alt='thumbnail' effect="blur"/>
    </div>
);
}
export default Video;