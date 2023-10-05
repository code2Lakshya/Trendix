import { options, base_url } from "../variables";
import { useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loader,setLoader]=useState(false);

    const fetchData = async () => {
        setLoader(true);
        try {
            const response = await fetch(base_url + url, options);
            const value = await response.json();
            setData(value.results);
            setLoader(false);
            return value;
        }
        catch (error) {
            console.log('Error Fetching data');
        }
    }
    const returnData = async (link) => {
        setLoader(true);
        try {
            const response = await fetch(base_url + link, options);
            const value = await response.json();
            setLoader(false);
            return value;
        }
        catch (error) {
            console.log('Error Fetching data');
        }
    }
    return { data, fetchData ,loader ,returnData};
}
export default useFetch;