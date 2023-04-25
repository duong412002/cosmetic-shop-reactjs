
import styles from './Navbar.module.scss';
import images from '~/assets/images';
import Nav from './nav';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

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
                        <Col md={8}>
                            <Nav />
                        </Col>
                        {/* <Col md={3}>
                            <div className={cx('hero__search__phone')}>
                                <div className={cx('hero__search__phone__icon')}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={cx('hero__search__phone__text')}>
                                    <h5>+65 11.188.888</h5>
                                </div>
                            </div>
                        </Col> */}
                    </div>
                </Row>
            </div>
        </div>
    );
}

export default Navbar;