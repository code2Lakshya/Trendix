import { useState } from "react";
import {BsArrowDownShort} from 'react-icons/bs';
import { useSelector } from "react-redux";
import './GenreFilter.css';
import {RxCross2} from 'react-icons/rx';

const GenreFilter = ({filterFor,setCategory,category}) => {
    const [userInput, setUserInput] = useState('');
    const genre =useSelector(state =>state.genre);
    const [showDropdown,setShowDropdown]=useState(false);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        if(userInput){
           const element= genre[filterFor].find(item => item.name.includes(userInput)) ;
           if(element){
           setCategory(prev => ([...prev,element]))
        }
        setUserInput('');
    }
    }
    const changeHandler=(e)=>{
        setUserInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase());
    }
    const handleCategory=(name)=>{
        setCategory(category.filter(item => item.name!==name));
    }

console.log(genre);
    return (
        <div className="genre-filter">
        {
            category.length>0 && <div>
                {
                    category.map(item => <span key={item.id}>{item.name} <span onClick={()=>handleCategory(item.name)}><RxCross2 /></span></span>)
                }
            </div>
        }
            <form className="genre-display" onSubmit={submitHandler}>
                <input type='text'
                    value={userInput}
                    onChange={changeHandler}
                    placeholder='Select genre'
                    onFocus={()=> setShowDropdown(true)}
                    onBlur={()=>setShowDropdown(false) }
                />
                <span onClick={()=>setShowDropdown(prev => !prev)}><BsArrowDownShort/></span>
            </form>
            <div className={`genre-dropdown ${showDropdown ? 'active': ''}`}>
             {
               genre && genre[filterFor]?.filter(item => item.name.includes(userInput))  
               .map(item => <span key={item?.id} >{item?.name}</span>)
             }
            </div>
        </div>
    );
}
export default GenreFilter;