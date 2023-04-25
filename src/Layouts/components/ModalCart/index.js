
import classNames from "classnames/bind";
import styles from './ModalCart.module.scss'
import './ModalCart.module.scss'
import images from "~/assets/images";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import { connect } from "react-redux";
import { deleteProduct } from "~/redux/actions/action";
import { useEffect, useState } from "react";
import FormatPrice from "~/Helpers/FormatPrice";
const cx = classNames.bind(styles)

function ModalCart(props) {
    const [cartItem, setCartItem] = useState(props.cart)
    const [price, setPrice] = useState(0);

    const handleChange = (item, d) => {
        let ind = -1;
        cartItem.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cartItem;
        tempArr[ind].quantity += d;

        if (tempArr[ind].quantity === 0)
            tempArr[ind].quantity = 1;
        setCartItem([...tempArr])
    }
    const handlePrice = () => {
        let ans = 0;
        cartItem.map((item) => (
            ans += item.quantity * item.price
        ))
        setPrice(ans);
    }
    useEffect(() => {
        handlePrice();
    })
    return (
        <div className={cx('modal__cart')}>
            {props.cart.map((product) => (
                <div key={product.id} className={cx('cart__item')}>
                    <img src={images.shoppingCart} alt="" />
                    <div className={cx('cart__hero')}>
                        <div className={cx('cart__info')}>
                            <h4 className={cx('cart__name')}>
                                {product.name}
                            </h4>
                            <FontAwesomeIcon onClick={() => props.deleteProduct(product)} icon={faXmark} />
                        </div>
                        <div className={cx('cart__wrap__price')}>
                            <div>
                                <Button quantity onClick={() => handleChange(product, - 1)}>-</Button>
                                {product.quantity === undefined ? (
                                    <Button quantity>{product.quantity = 1}</Button>
                                ) : (
                                    <Button quantity>{product.quantity}</Button>
                                )}
                                <Button quantity onClick={() => handleChange(product, + 1)}>+</Button>
                            </div>
                            <p className={cx('cart__price')}>
                                <FormatPrice price={product.price} />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className={cx('footer-cart')}>
                <div >
                    <h4>Total</h4>
                    <h2><FormatPrice price={price} /></h2>
                </div>
                <Button primary>
                    Check Out
                </Button>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.total,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (product_current) =>
            dispatch(deleteProduct(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);