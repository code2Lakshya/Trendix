import logo from '../../assets/logo.svg';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../../utilities/redux/Slices/searchSlice';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const search = useSelector(state => state.search);
    const [showSearch, setShowSearch] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight)
                setNavbar(false);
            if (window.scrollY < window.innerHeight)
                setNavbar(true);
        })
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            navigate('/search/' + search);
            setShowSearch(false);
        }
    }
    const searchClickHandler = () => {
        setShowSearch(!showSearch);
        setMenu(false);
    }
    const menuClickHandler = () => {
        setMenu(!menu);
        setShowSearch(false);
    }
    const closeSearchHandler = () => {
        dispatch(addSearch(''));
        setShowSearch(false);
    }
    return (
        <header className={`navbar-wrapper ${!navbar ? (!showSearch ? 'full-inactive' : 'inactive') : ''}`}>
            <div className={`navbar-container ${menu ? 'dark' : ''} `}>
                <nav>
                    <Link to='/'><img src={logo} alt='WebsiteLogo' /></Link>
                    <div className='nav-right'>
                        <ul className={menu ? 'active' : ''}>
                            <Link to='/explore/movie'><li>Movies</li></Link>
                            <Link to='/explore/tv'><li>About</li></Link>
                        </ul>
                        <span onClick={searchClickHandler}><AiOutlineSearch /></span>
                        <span onClick={menuClickHandler}>{menu ? <RxCross1 /> : <AiOutlineMenu />}</span>
                    </div>
                </nav>
            </div>
            {showSearch &&
                (<form onSubmit={submitHandler}>
                    <div className='searchBar'>
                        <input type='text'
                            placeholder='Search for a movie or tv show'
                            name='search'
                            value={search}
                            onChange={(e) => dispatch(addSearch(e.target.value))}
                        />
                        <span onClick={closeSearchHandler}><RxCross1 /></span>
                    </div>
                </form>)}
        </header>
    );
}
export default Navbar;