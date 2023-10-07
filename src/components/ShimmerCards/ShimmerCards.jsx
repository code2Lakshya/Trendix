import ShimmerCard from "./ShimmerCard/ShimmerCard";

const ShimmerCards=({className})=>{
    return(
        <div className={`shimmer-cards ${className ? className : ''}`}>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        </div>
    );
}
export default ShimmerCards;