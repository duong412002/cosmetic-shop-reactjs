

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import images from '~/assets/images';

import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Product() {
    return (
        <Fragment>
            <div className={cx("filter__item")}>
                <Row className={cx('wrap-filter')}>
                    <Col md='5'>
                        <div className={cx("filter__sort")}>
                            <span>Sort By</span>
                            <select>
                                <option value="0">Default</option>
                                <option value="0">Default</option>
                            </select>
                            {/* <div class="nice-select open" tabindex="0">
                            <span class="current">Default</span>
                            <ul class="list">
                                <li data-value="0" class="option">Default</li>
                                <li data-value="0" class="option selected focus">Default</li>
                            </ul>
                        </div> */}
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className={cx("filter__found")}>
                            <h6><span>16</span> Products found</h6>
                        </div>
                    </Col>
                    <Col md='3'>
                        <div className={cx("filter__option")}>
                            123
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col md='4'>
                    <div className={cx("product__item")}>
                        <div className={cx("product__item__pic")}>
                            <div className={cx('wrapper-img')}>
                                <img src={images.product} alt="" />
                                <ul className={cx("product__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("product__item__text")}>
                            <h5><Link>Raisin’n’nuts</Link></h5>
                            <div className={cx("product__item__price")}>
                                $36.00
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md='4'>
                    <div className={cx("product__item")}>
                        <div className={cx("product__item__pic")}>
                            <div className={cx('wrapper-img')}>
                                <img src={images.product} alt="" />
                                <ul className={cx("product__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("product__item__text")}>
                            <h5><Link>Raisin’n’nuts</Link></h5>
                            <div className={cx("product__item__price")}>
                                $36.00
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md='4'>
                    <div className={cx("product__item")}>
                        <div className={cx("product__item__pic")}>
                            <div className={cx('wrapper-img')}>
                                <img src={images.product} alt="" />
                                <ul className={cx("product__item__pic__hover")}>
                                    <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                    <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("product__item__text")}>
                            <h5><Link>Raisin’n’nuts</Link></h5>
                            <div className={cx("product__item__price")}>
                                $36.00
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
}

export default Product;