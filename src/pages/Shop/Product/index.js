

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles)

function Product({ data }) {



    return (<Col md='4'>

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
                <h5><Link>{data.name}</Link></h5>
                <div className={cx("product__item__price")}>
                    {data.price}
                </div>
            </div>
        </div>


    </Col>);
}

export default Product;