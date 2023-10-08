import { useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from "react-redux";
import './GenreFilter.css';
import { RxCross2 } from 'react-icons/rx';

const GenreFilter = ({ filterFor, setCategory, category }) => {
    const [userInput, setUserInput] = useState('');
    const genre = useSelector(state => state.genre);
    const [showDropdown, setShowDropdown] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        if (userInput) {
            const element = genre[filterFor].find(item => item.name.includes(userInput));
            if (element) {
                setCategory([...category, element])
                setUserInput('');
            }
        }
    }
    const changeHandler = (e) => {
        setUserInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase());
    }

    const handleCategory = (name, type) => {
        if (type === 'remove')
            setCategory(category.filter(item => item !== name));
        else {
            setCategory(prev => ([...prev, name]));
           setUserInput('');
        }
    }

    return (
        <div className="genre-filter">
            {
                category.length > 0 &&
                <div className="category-container">{
                    category.map(item => <span key={item.id}>{item.name} <span onClick={() => handleCategory(item, 'remove')}><RxCross2 /></span></span>)
                } </div>
            }
            <form className="genre-display" onSubmit={submitHandler}>
                <input type='text'
                    value={userInput}
                    onChange={changeHandler}
                    placeholder={category?.length>0 ? '':'Search genres'}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setShowDropdown(false)}
                />
                <div>
                {
                    category.length > 0 && <span onClick={() => setCategory([])}><RxCross2 /></span>
                }
                <span onClick={() => setShowDropdown(prev => !prev)} id='arrow'><IoIosArrowDown /></span>
                </div>
            </form>
            <div className={`genre-dropdown ${showDropdown ? 'active' : ''}`} onScroll={(e)=> e.stopPropagation()}>
                {
                    genre && (genre[filterFor]?.filter(item => item.name.includes(userInput) && !category.includes(item))
                        .map(item => <span key={item?.id} onClick={(e) => handleCategory(item, "add")}>{item?.name}</span>)
                        || <span>No options</span>)
                }
            </div>
        </div>
    );
}
export default GenreFilter;