

import styles from './Button.module.scss';
import classNames from "classnames/bind";
import { Slider as SlickSlider } from '~/components/Slider'
import images from '~/assets/images';
import './Categories.module.scss'

import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx("categories")}>
            <div className={cx("container")}>
                <Row>
                    <SlickSlider>
                        <Col xs='3'>
                            <div className={cx("categories__item")}>
                                <img src={images.categories} alt=''/>
                                <h5><Link>Fresh Fruit</Link></h5>
                            </div>
                        </Col>
                        <Col xs='3'>
                            <div className={cx("categories__item")}>
                                <img src={images.categories} alt=''/>
                                <h5><Link>Dried Fruit</Link></h5>
                            </div>
                        </Col>
                        <Col xs='3'>
                            <div className={cx("categories__item")}>
                                <img src={images.categories} alt=''/>
                                <h5><Link>ables</Link>Veget</h5>
                            </div>
                        </Col>
                        <Col xs='3'>
                            <div className={cx("categories__item")}>
                                <img src={images.categories} alt=''/>
                                <h5><Link>drink fruits</Link></h5>
                            </div>
                        </Col>
                        <Col xs='3'>
                            <div className={cx("categories__item")}>
                                <img src={images.categories} alt=''/>
                                <h5><Link>drink fruits</Link></h5>
                            </div>
                        </Col>
                    </SlickSlider>
                </Row>
            </div>
        </div>
    );
}

export default Categories;