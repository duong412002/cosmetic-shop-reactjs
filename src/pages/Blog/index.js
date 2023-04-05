import styles from './Blog.module.scss'
import './Blog.module.scss'
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)


function Blog() {
    return (
        <div className={cx("blog")}>
            <Row>
                <Col md={4}>
                    <div className={cx("blog__item")}>
                        <div className={cx("blog__item__pic")}>
                            <img src={images.blog} alt="" />
                        </div>
                        <div className={cx("blog__item__text")}>
                            <ul>
                                <li><FontAwesomeIcon icon={faCalendar} /> May 4,2019</li>
                                <li><FontAwesomeIcon icon={faComment} /> 5</li>
                            </ul>
                            <h5>
                                <Link>6 ways to prepare breakfast for 30</Link>
                            </h5>
                            <p>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                quaerat
                            </p>
                            <Link className={cx("blog__btn")}>
                                READ MORE
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={cx("blog__item")}>
                        <div className={cx("blog__item__pic")}>
                            <img src={images.blog} alt="" />
                        </div>
                        <div className={cx("blog__item__text")}>
                            <ul>
                                <li><FontAwesomeIcon icon={faCalendar} /> May 4,2019</li>
                                <li><FontAwesomeIcon icon={faComment} /> 5</li>
                            </ul>
                            <h5>
                                <Link>6 ways to prepare breakfast for 30</Link>
                            </h5>
                            <p>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                quaerat
                            </p>
                            <Link className={cx("blog__btn")}>
                                READ MORE
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={cx("blog__item")}>
                        <div className={cx("blog__item__pic")}>
                            <img src={images.blog} alt="" />
                        </div>
                        <div className={cx("blog__item__text")}>
                            <ul>
                                <li><FontAwesomeIcon icon={faCalendar} /> May 4,2019</li>
                                <li><FontAwesomeIcon icon={faComment} /> 5</li>
                            </ul>
                            <h5>
                                <Link>6 ways to prepare breakfast for 30</Link>
                            </h5>
                            <p>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                quaerat
                            </p>
                            <Link className={cx("blog__btn")}>
                                READ MORE
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={cx("blog__item")}>
                        <div className={cx("blog__item__pic")}>
                            <img src={images.blog} alt="" />
                        </div>
                        <div className={cx("blog__item__text")}>
                            <ul>
                                <li><FontAwesomeIcon icon={faCalendar} /> May 4,2019</li>
                                <li><FontAwesomeIcon icon={faComment} /> 5</li>
                            </ul>
                            <h5>
                                <Link>6 ways to prepare breakfast for 30</Link>
                            </h5>
                            <p>
                                Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                quaerat
                            </p>
                            <Link className={cx("blog__btn")}>
                                READ MORE
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </Link>
                        </div>
                    </div>
                </Col>

                <Col md={12}>
                    <div className={cx("blog__pagination")}>
                        <Link>1</Link>
                        <Link>2</Link>
                        <Link>3</Link>
                        <Link>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Blog;