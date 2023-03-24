
import styles from './Navbar.module.scss';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);
function Navbar() {
    return (
        <div className={cx('header-navbar')}>
            <div className={cx('container')}>
                <Row>
                    <div className={cx('wrap-navbar')}>
                        <Col md={3}>
                            <div className={cx('header__logo')}>
                                <Link to="/">
                                    <img src={images.logo} alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={cx('header__menu')}>
                                <ul>
                                    <li className={cx('active')}><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/shop'}>Shop</Link></li>
                                    <li>Pages
                                        <ul className={cx('header__menu__dropdown')}>
                                            <li><Link >Shop Details</Link></li>
                                            <li><Link >Shoping Cart</Link></li>
                                            <li><Link >Check Out</Link></li>
                                            <li><Link >Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link >Blog</Link></li>
                                    <li><Link to={'/contact'}>Contact</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={cx('header__cart')}>
                                <ul>
                                    <li>
                                        <Link ><FontAwesomeIcon icon={faCartShopping}/> 
                                        <span className={cx('quantity-cart')}>3</span></Link>
                                    </li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
}

export default Navbar;