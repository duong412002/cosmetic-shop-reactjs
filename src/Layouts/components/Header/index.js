
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
library.add(faEnvelope);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('header__top')}>
                    <div className={cx('header__top__left')}>
                        <ul>
                            <li>  <FontAwesomeIcon icon="envelope" /> hello@colorlib.com</li>
                            <li>Free Shipping for all Order of $99</li>
                        </ul>
                    </div>
                    <div className={cx('header__top__right')}>
                        <div className={cx('header__top__right__social')}>
                            <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link><FontAwesomeIcon icon={faLinkedin} /></Link>
                            <Link><FontAwesomeIcon icon={faPinterest} /></Link>
                        </div>
                        <div className={cx('header__top__right__language')}>
                            <div className={cx('header-language')}>
                                <div className={cx('header-image-language')}>
                                    <img src={images.language} alt="" />
                                </div>
                                <div>English</div>
                                <span><FontAwesomeIcon icon={faChevronDown} /></span>
                            </div>
                            <ul>
                                <li><Link>Spanis</Link></li>
                                <li><Link>English</Link></li>
                            </ul>
                        </div>
                        <div className={cx('header__top__right__auth')}>
                            <Link><span><FontAwesomeIcon icon={faUser} /> </span> Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;