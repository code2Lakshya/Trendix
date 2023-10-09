import { useEffect } from 'react';
import './ShimmerHero.css';

const ShimmerHero=()=>{
    useEffect(()=>{
        window.scroll(0,0);
    },[])
return(
    <div className='shimmer-hero'>
        <div className='shimmer-left'></div>
        <div className='shimmer-right'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);
}
export default ShimmerHero;