import './Loader.css';

const Loader=({className})=>{
return(
    <div className={className}>
        <span id='spinner'></span>
    </div>
);
}
export default Loader;