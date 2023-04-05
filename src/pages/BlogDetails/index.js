import { Col, Row } from "react-bootstrap";
import images from "~/assets/images";
import styles from "./BlogDetails.module.scss";
import "./BlogDetails.module.scss";
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { publicRoutes } from "~/routes";


const cx = classNames.bind(styles)

function BlogDetails() {

    
    return (
        <div className={cx("blog-details")}>
            <Row>
                <Col md={3}>
                    <div className={cx("blog__details__content")}>
                        <div className={cx("blog__details__author")}>
                            <h3>The corner window forms a place within a place that is a resting point.
                            </h3>
                            <div className={cx("blog__details__author__pic")}>
                                <img src={images.detailAuthor} alt="" />
                            </div>
                            <div className={cx("blog__details__author__text")}>
                                <h6>Michael Scofield</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                        <div className={cx("blog__details__widget")}>
                            <ul>
                                <li><span>Categories:</span> Food</li>
                                <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                            </ul>
                            <div className={cx("blog__details__social")}>
                                <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                                <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                                <Link><FontAwesomeIcon icon={faLinkedin} /></Link>
                                <Link><FontAwesomeIcon icon={faEnvelope} /></Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className={cx("blog__details__text")}>
                        <img src={images.blogDetail} alt="" />
                        <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                            dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                            aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                            sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                            Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                            quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                            feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                            The study area is located at the back with a view of the vast nature. Together with the other
                            buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                            the components. The use of materials seeks connection to the main house, the adjacent
                            stables
                        </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={cx("related-blog")}>
                        <div className={cx("section-title", "related-blog-title")}>
                            <h2>Post You May Like</h2>
                        </div>
                        <div className={cx("blog__item")}>
                            <div className={cx("blog__item__pic")}>
                                <img src={images.blogDetail} alt="" />
                            </div>
                            <div className={cx("blog__item__text")}>
                                <h5>
                                    <Link>
                                        Cooking tips make cooking simple
                                    </Link>
                                </h5>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        May 4,2019
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faComment} />
                                        5
                                    </li>
                                </ul>
                                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default BlogDetails;