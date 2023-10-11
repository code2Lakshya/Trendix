import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../utilities/hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../../utilities/redux/Slices/movieitemSlice";
import Video from "./Video/Video";
import './VideoSection.css';
import ShimmerVideo from "./ShimmerVideo/ShimmerVideo";


const VideoSection = () => {
    const { returnData, loader } = useFetch('');
    const { videos } = useSelector(state => state.movie);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        returnData(location.pathname + '/videos')
            .then(response => dispatch(addVideos(response.results)))
            .catch(error => console.log(error))
    }, [location.pathname])

    if (loader)
        return (<div className="videos-carousel shimmer-videos">
            <ShimmerVideo />
            <ShimmerVideo />
            <ShimmerVideo />
            <ShimmerVideo />
        </div>);


    return (
        <div className="videos-container">
            <h1>Official Videos</h1>
            {videos &&
                <div className="videos-carousel">
                    {
                        videos?.map(item => <Video key={item.id} data={item} />)
                    }
                </div>}
        </div>
    );
}
export default VideoSection;