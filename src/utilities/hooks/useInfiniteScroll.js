import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useInfiniteScroll = (setPage,page,item) => {
    useEffect(()=>{
        window.addEventListener('scrollend',checkScroll);
        return ()=>{
            window.removeEventListener('scrollend',checkScroll);
        }
    },[])
    const checkScroll=()=>{
        if((window.innerHeight + window.scrollY) > (document.querySelector(item) )?.offsetHeight) {
            setPage(prev => prev+1)
    }
}
}
export default useInfiniteScroll;