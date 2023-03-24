
import styles from './Footer.module.scss';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx("footer")}>
            <div className={cx("container")}>
                <Row>
                    <Col md='3'>
                        <div className={cx("footer__about")}>
                            <div className={cx("footer__about__logo")}>
                                <Link to="/">
                                    <img src={images.logo} alt="" />
                                </Link>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md='1'></Col>
                    <Col md='3'>
                        <div className={cx("footer__widget")}>
                            <Row>
                                <Col md='6'>
                                    <p>Useful Links</p>
                                    <ul>
                                        <li><Link>About Us</Link></li>
                                        <li><Link>About Our Shop</Link></li>
                                        <li><Link>Secure Shopping</Link></li>
                                        <li><Link>Delivery infomation</Link></li>
                                        <li><Link>Privacy Policy</Link></li>
                                        <li><Link>Our Sitemap</Link></li>
                                    </ul>
                                </Col>
                                <Col md='6'>
                                    <p>Detail Links</p>
                                    <ul>
                                        <li><Link>Who We Are</Link></li>
                                        <li><Link>Our Services</Link></li>
                                        <li><Link>Projects</Link></li>
                                        <li><Link>Contact</Link></li>
                                        <li><Link>Innovation</Link></li>
                                        <li><Link>Testimonials</Link></li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md='1'></Col>
                    <Col md='4'>
                        <div className={cx("footer__widget")}>
                            <p>Join Our Newsletter Now</p>
                            <span>Get E-mail updates about our latest shop and special offers.</span>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <Button primary>Subscribe</Button>
                            </form>
                            <div className={cx("footer__widget__social")}>
                                <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                                <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link><FontAwesomeIcon icon={faLinkedin} /></Link>
                                <Link><FontAwesomeIcon icon={faPinterest} /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={cx("footer__copyright")}>
                    <div className={cx("footer__copyright__text")}>
                        <p>
                            Copyright &copy;
                            All rights reserved | This template is made with
                            <FontAwesomeIcon icon={faHeart} />
                        </p>
                    </div>
                    <div className={cx("footer__copyright__payment")}>
                        <img src={images.payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;