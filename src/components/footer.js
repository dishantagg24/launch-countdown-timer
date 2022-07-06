/** @format */

import PatternHills from '../assets/pattern-hills.svg';
import FacebookIcon from '../assets/icon-facebook.svg';
import PinterestIcon from '../assets/icon-pinterest.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <img className='hill-img' src={PatternHills} alt='pattern-hill' />
      <ul className='social-icons'>
        <li>
          <img src={FacebookIcon} alt='fb-icon' />
        </li>
        <li>
          <img src={PinterestIcon} alt='pinterest-icon' />
        </li>
        <li>
          <img src={InstagramIcon} alt='insta-icon' />
        </li>
      </ul>
    </footer>
  );
};
