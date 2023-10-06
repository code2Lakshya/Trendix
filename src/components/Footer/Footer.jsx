import './Footer.css'
import {BiLogoFacebook,BiLogoTwitter} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <ul id='footer-top'>
                <li>Terms Of Use</li>
                <li>Privacy-Policy</li>
                <li>About</li>
                <li>Blog</li>
                <li>FAQ</li>
            </ul>
            <p>MovieX is your one-stop digital hub for all things cinematic and episodic. As you embark on your journey into the captivating world of film and
                television, our website promises to be your most trusted companion.With an
                intuitive user interface, MovieX offers a visually stunning and user-
                friendly platform that is designed to elevate your trailer-watching experience.</p>
                <div id='footer-lower'>
                   <span><BiLogoFacebook /></span> 
                   <span><BsInstagram /></span> 
                   <span><BiLogoTwitter /></span> 
                   <span><FaLinkedinIn /></span> 
                </div>
        </footer>
    );
}
export default Footer;