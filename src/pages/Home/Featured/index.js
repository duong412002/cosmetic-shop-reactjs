
import styles from './Featured.module.scss';
import classNames from "classnames/bind";
import images from '~/assets/images';
import './Featured.module.scss';
import { Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Featured() {
    return (
        <div className={cx("featured")}>
            <Row>
                <Col md={12}>
                    <div className={cx("section-title")}>
                        <h2>Featured Product</h2>
                    </div>
                    {/* <div className={cx("featured__controls")}>
                        <ul>
                            data-filter="*"
                            <li className={cx("active")}>All</li>
                            dataFilter=".oranges"
                            <li>Oranges</li>
                            <li>Fresh Meat</li>
                            <li>Vegetables</li>
                            <li>Fastfood</li>
                        </ul>
                    </div> */}
                </Col>
            </Row>
            <div className={cx("featured__filter")}>
                <Row>
                    <Col md={3}>
                        <div className={cx("featured__item")}>
                            <div className={cx("featured__item__pic")}>
                                <img src={images.featured} alt='' />
                                <ul className={cx("featured__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                            <div className={cx("featured__item__text")}>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("featured__item__price")}>
                                    $30.00
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className={cx("featured__item")}>
                            <div className={cx("featured__item__pic")}>
                                <img src={images.featured} alt='' />
                                <ul className={cx("featured__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                            <div className={cx("featured__item__text")}>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("featured__item__price")}>
                                    $30.00
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className={cx("featured__item")}>
                            <div className={cx("featured__item__pic")}>
                                <img src={images.featured} alt='' />
                                <ul className={cx("featured__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                            <div className={cx("featured__item__text")}>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("featured__item__price")}>
                                    $30.00
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className={cx("featured__item")}>
                            <div className={cx("featured__item__pic")}>
                                <img src={images.featured} alt='' />
                                <ul className={cx("featured__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                            <div className={cx("featured__item__text")}>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("featured__item__price")}>
                                    $30.00
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Featured;