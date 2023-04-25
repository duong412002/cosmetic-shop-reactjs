
import classNames from 'classnames/bind';
import styles from './ShopDetails.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button'
import Featured from '../Home/Featured';
import * as productDetailServices from '~/apiServices/productDetailServices'


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { SlickPrevArrow, SlickNextArrow } from '~/pages/Home/Categories/slickArrows';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faPinterest,
} from '@fortawesome/free-brands-svg-icons';



import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import FormatPrice from '~/Helpers/FormatPrice';

const cx = classNames.bind(styles)

let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SlickPrevArrow />,
    nextArrow: <SlickNextArrow />
}

function ShopDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            const result = await productDetailServices.productDetail(id);
            setProduct(result);


        }
        fetchApi();
    }, [id])

    return (
        <div className={cx("product-details")}>
            <Row>
                <Col md={6}>
                    <div className={cx("product__details__pic")}>
                        <div className={cx("product__details__pic__item")}>
                            <img className={cx("product__details__pic__item--large")}
                                src={images.productDetail} alt="" />
                        </div>
                        <div className={cx("product__details__pic__slider")}>
                            <Slider {...settings}>
                                <img src={images.productThump} alt="" />
                                <img src={images.productThump} alt="" />
                                <img src={images.productThump} alt="" />
                                <img src={images.productThump} alt="" />
                                <img src={images.productThump} alt="" />
                            </Slider>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={cx("product__details__text")}>
                        <h3 className='xinchao'>{product.name}</h3>
                        <div className={cx("product__details__rating")}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                            <span>(18 reviews)</span>
                        </div>
                        <div className={cx("product__details__price")}>
                            <FormatPrice price={product.price} />
                        </div>
                        <p>{product.description}.</p>
                        <div className={cx('wrap-quantity')}>
                            <div className={cx("product__details__quantity")}>
                                <div className={cx("quantity")}>
                                    <div className={cx("pro-qty")}>
                                        <span className={cx("qtybtn")}>-</span>
                                        <input type="text" value="1" />
                                        <span className={cx("qtybtn")}>+</span>
                                    </div>
                                </div>
                            </div>
                            <Button primary>ADD TO CARD</Button>
                            <div className={cx('icon_heart_alt')}>
                                <FontAwesomeIcon icon={faHeartRegular} />
                            </div>
                        </div>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Quantity</b> <span>{product.quantity}</span></li>
                            <li><b>Share on</b>
                                <div className={cx("share")}>
                                    <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                                    <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                                    <Link><FontAwesomeIcon icon={faLinkedin} /></Link>
                                    <Link><FontAwesomeIcon icon={faPinterest} /></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={12}>
                    <div className={cx("product__details__tab")}>
                        <ul className={cx("nav-tabs")}>
                            <li className={cx("nav-item")}>
                                <Link className={cx("nav-link")}>Description</Link>
                            </li>
                            {/* <li className={cx("nav-item")}>
                                    <Link className={cx("nav-link")}>Information</Link>
                                </li>
                                <li className={cx("nav-item")}>
                                    <Link className={cx("nav-link")}>Review</Link>
                                </li> */}
                        </ul>

                        <div className={cx("product__details__tab__desc")}>
                            <h6>Products Infomation</h6>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                sed sit amet dui. Proin eget tortor risus.</p>
                        </div>
                    </div>

                </Col>
            </Row>
            <Featured />
        </div>
    );
}

export default ShopDetails;