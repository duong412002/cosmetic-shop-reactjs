

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faMoneyCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Tippy from "@tippyjs/react";
// import { useCartContext } from '~/redux/context/cart_context';
import 'tippy.js/dist/tippy.css';
import { OptionProduct } from '~/Layouts';

const cx = classNames.bind(styles)

function Product({ data, handleClickAddCart }) {

    const amountt = data.price ? data.price : '';
    const formattedAmount = amountt.toLocaleString('vi', { style: 'currency', currency: 'VND' }).replace(/\s/g, '');

    
    return (
        <Col md='4'>
            <div className={cx("product__item")}>
                <div className={cx("product__item__pic")}>
                    <div className={cx('wrapper-img')}>
                        <img src={images.product} alt="" />
                        <ul className={cx("product__item__pic__hover")}>
                            <OptionProduct
                                data={data}
                                handleClickAddCart={handleClickAddCart}
                            />
                        </ul>
                    </div>
                </div>
                <div className={cx("product__item__text")}>
                    <h5><Link to={`/shopDetails/${data.id}`} >{data.name}</Link></h5>
                    <div className={cx("product__item__price")}>
                        {formattedAmount}
                    </div>
                </div>
            </div>
        </Col>
    );
}




export default Product;