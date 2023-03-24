
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import './slick-slider.scss';
import images from '~/assets/images';
import Product from './Product';

import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
}

function Shop() {


    return (
        <Fragment>
            <div className={cx('product__discount')}>
                <div className={cx("section-title product__discount__title")}>
                    <h2>Sale Off</h2>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className={cx("product__discount__item")}>
                            <div className={cx("product__discount__item__pic")}>
                                <div className={cx('wrapper-img')}>
                                    <img src={images.product} alt="" />
                                    <ul className={cx("product__item__pic__hover")}>
                                        <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                    </ul>
                                </div>
                                <div className={cx("product__discount__percent")}>-20%</div>
                            </div>
                            <div className={cx("product__discount__item__text")}>
                                <span>Dried Fruit</span>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("product__item__price")}>$30.00 <span>$36.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx("product__discount__item")}>
                            <div className={cx("product__discount__item__pic")}>

                                <div className={cx('wrapper-img')}>
                                    <img src={images.product} alt="" />
                                    <ul className={cx("product__item__pic__hover")}>
                                        <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                    </ul>
                                </div>
                                <div className={cx("product__discount__percent")}>-20%</div>
                            </div>
                            <div className={cx("product__discount__item__text")}>
                                <span>Dried Fruit</span>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("product__item__price")}>$30.00 <span>$36.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx("product__discount__item")}>
                            <div className={cx("product__discount__item__pic")}>

                                <div className={cx('wrapper-img')}>
                                    <img src={images.product} alt="" />
                                    <ul className={cx("product__item__pic__hover")}>
                                        <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                    </ul>
                                </div>
                                <div className={cx("product__discount__percent")}>-20%</div>
                            </div>
                            <div className={cx("product__discount__item__text")}>
                                <span>Dried Fruit</span>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("product__item__price")}>$30.00 <span>$36.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx("product__discount__item")}>
                            <div className={cx("product__discount__item__pic")}>

                                <div className={cx('wrapper-img')}>
                                    <img src={images.product} alt="" />
                                    <ul className={cx("product__item__pic__hover")}>
                                        <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                    </ul>
                                </div>
                                <div className={cx("product__discount__percent")}>-20%</div>
                            </div>
                            <div className={cx("product__discount__item__text")}>
                                <span>Dried Fruit</span>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("product__item__price")}>$30.00 <span>$36.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx("product__discount__item")}>
                            <div className={cx("product__discount__item__pic")}>

                                <div className={cx('wrapper-img')}>
                                    <img src={images.product} alt="" />
                                    <ul className={cx("product__item__pic__hover")}>
                                        <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                    </ul>
                                </div>
                                <div className={cx("product__discount__percent")}>-20%</div>
                            </div>
                            <div className={cx("product__discount__item__text")}>
                                <span>Dried Fruit</span>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("product__item__price")}>$30.00 <span>$36.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx("product__discount__item")}>
                            <div className={cx("product__discount__item__pic")}>

                                <div className={cx('wrapper-img')}>
                                    <img src={images.product} alt="" />
                                    <ul className={cx("product__item__pic__hover")}>
                                        <li><Link><FontAwesomeIcon icon={faHeart} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faRetweet} /></Link></li>
                                        <li><Link><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                                    </ul>
                                </div>
                                <div className={cx("product__discount__percent")}>-20%</div>
                            </div>
                            <div className={cx("product__discount__item__text")}>
                                <span>Dried Fruit</span>
                                <h5><Link>Raisin’n’nuts</Link></h5>
                                <div className={cx("product__item__price")}>$30.00 <span>$36.00</span></div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <Product />
        </Fragment>
    );
}

export default Shop;