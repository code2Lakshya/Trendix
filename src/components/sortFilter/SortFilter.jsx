import { useState } from "react";
import { sortbyData } from "../../utilities/variables";
import { IoIosArrowDown } from "react-icons/io";
import './SortFilter.css';
import { RxCross2 } from "react-icons/rx";

const SortFilter = ({ sortfilter, setSortFilter }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const clickHandler = (value) => {
        setSortFilter(value);
        setShowDropdown(false);
    }
    return (
        <div className="sort-filter" onClick={()=> setShowDropdown(!showDropdown)}>
            <div className="filter-left">
                {
                    sortfilter ? <span className="up">{sortfilter.label}</span> : <p>Sort by</p>
                }
                <div className="filter-btn">
               { sortfilter? <span onClick={()=> setSortFilter(null)}><RxCross2 /></span> :''}
                <span id='down'><IoIosArrowDown /></span>
                </div>
            </div>
            <div className={`filter-dropdown ${showDropdown ? 'active' : ''}`}>
                {
                    (sortfilter ? sortbyData.filter(item => !item.label.includes(sortfilter)) : sortbyData)
                        .map(item => <span key={item.id} onClick={() => clickHandler(item)}>{item.label}</span>)
                }
            </div>
        </div>
    );
}
export default SortFilter;