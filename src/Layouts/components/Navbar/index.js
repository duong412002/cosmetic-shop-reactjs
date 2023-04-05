
import styles from './Navbar.module.scss';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

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
                                    <li><NavLink to={'/'}>Home</NavLink></li>
                                    <li><NavLink to={'/shop'}>Shop</NavLink></li>
                                    <li>Pages
                                        <ul className={cx('header__menu__dropdown')}>
                                            <li><Link to={'/shopDetails'}>Shop Details</Link></li>
                                            <li><Link to={'/shoppingCart'}>Shoping Cart</Link></li>
                                            <li><Link to={'/checkout'}>Check Out</Link></li>
                                            <li><Link to={'/blogDetails'}>Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
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