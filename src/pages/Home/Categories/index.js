

import styles from './Categories.module.scss';
import classNames from "classnames/bind";
import images from '~/assets/images';
import './Categories.module.scss'
import { SlickPrevArrow, SlickNextArrow } from './slickArrows';

import { Link } from "react-router-dom";
import Slider from 'react-slick';

const cx = classNames.bind(styles);

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

function Categories() {
    return (
        <div className={cx("categories")}>

            <Slider {...settings}>
                <div className={cx("categories__item")}>
                    <img src={images.categories} alt='' />
                    <h5><Link>Fresh Fruit</Link></h5>
                </div>
                <div className={cx("categories__item")}>
                    <img src={images.categories} alt='' />
                    <h5><Link>Dried Fruit</Link></h5>
                </div>
                <div className={cx("categories__item")}>
                    <img src={images.categories} alt='' />
                    <h5><Link>ablesVeget</Link></h5>
                </div>
                <div className={cx("categories__item")}>
                    <img src={images.categories} alt='' />
                    <h5><Link>drink fruits</Link></h5>
                </div>
                <div className={cx("categories__item")}>
                    <img src={images.categories} alt='' />
                    <h5><Link>drink fruits</Link></h5>
                </div>
            </Slider>
        </div>
    );
}

export default Categories;