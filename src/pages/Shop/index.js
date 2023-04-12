
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import './slick-slider.scss';
import images from '~/assets/images';
import Product from './Product';
import * as productServices from '~/apiServices/productServices'

import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Pagination from '~/components/Pagination';


const cx = classNames.bind(styles)

let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
}

function Shop() {
    const [productValue, setProductValue] = useState([])
    const [totalProduct, setTotalProduct] = useState()
    const [page, setPage] = useState(0)
    const [sz] = useState(4)
    const {pageShop} = useParams();


    useEffect(() => {

        const fetchApi = async () => {
            const result = await productServices.product(page, sz);
            const totalPage = await productServices.productTotal();

            setProductValue(result);
            setTotalProduct(totalPage);
        }
        fetchApi();
    }, [pageShop])

    const paginate = (pageNumber) => {
        setPage(pageNumber)
    }
    const handlePaginate = (newPage) => {
        setPage(newPage)
    }
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
                {productValue.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </Row>
            <Pagination
                sz={sz}
                page={page}
                totalProduct={totalProduct}
                paginate={paginate}
                onPageChange={handlePaginate}
            />
        </Fragment>
    );
}

export default Shop;