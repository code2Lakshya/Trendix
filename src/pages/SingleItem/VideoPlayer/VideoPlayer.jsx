import { useDispatch, useSelector } from "react-redux";
import { yt_iframeUrl } from "../../../utilities/variables";
import { RxCross2 } from 'react-icons/rx';
import './VideoPlayer.css';
import { togglePlayer } from "../../../utilities/redux/Slices/movieitemSlice";

const VideoPlayer = () => {
    const { showVideoPlayer, videoSrc } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    if (showVideoPlayer) {
        return (
            <div className="video-player">
                <div className='iframe-container'>
                    <p onClick={() => dispatch(togglePlayer(false))}>
                        <span><RxCross2 /></span>
                        <span>Close</span>
                    </p>
                    <iframe src={yt_iframeUrl.replace('<key>', videoSrc)} allow='fullscreen' title='youtube' ></iframe>
                </div>
            </div>
        )
    }
    else
        return <></>;
}
export default VideoPlayer;