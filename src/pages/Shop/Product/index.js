

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

import { connect } from "react-redux";
import { buyProduct } from '~/redux/actions/action';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faMoneyCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Tippy from "@tippyjs/react";
// import { useCartContext } from '~/redux/context/cart_context';
import 'tippy.js/dist/tippy.css';
import { OptionProduct } from '~/Layouts';
import FormatPrice from '~/Helpers/FormatPrice';

const cx = classNames.bind(styles)

function Product(props) {

    const product_current = {
        id: props.data.id,
        name: props.data.name,
        price: props.data.price,
    };


    return (
        <Col md='4'>
            <div className={cx("product__item")}>
                <div className={cx("product__item__pic")}>
                    <div className={cx('wrapper-img')}>
                        <img src={images.product} alt="" />
                        <ul className={cx("product__item__pic__hover")}>
                            <OptionProduct
                                data={props}
                                productCurrent={product_current}
                            />
                        </ul>
                    </div>
                </div>
                <div className={cx("product__item__text")}>
                    <h5><Link to={`/shopDetails/${props.data.id}`} >{props.data.name}</Link></h5>
                    <div className={cx("product__item__price")}>
                        <FormatPrice price={props.data.price} />
                    </div>
                </div>
            </div>
        </Col>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyProduct: (product_current) => dispatch(buyProduct(product_current)),
    };
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);