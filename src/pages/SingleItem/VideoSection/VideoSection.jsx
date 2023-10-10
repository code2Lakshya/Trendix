import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../../utilities/hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../../utilities/redux/Slices/movieitemSlice";
import Video from "./Video/Video";




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
        return <p>Shimmer Videos</p>;

    if (videos === null)
        return <p></p>;

    return (
        <div className="videos-container">
            <h1>Official Videos</h1>
            <div className="videos-carousel">
                {
                videos?.map(item => <Video key={item.id} data={item}/>)
                }
            </div>
        </div>
    );
}
export default VideoSection;