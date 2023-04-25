
import classNames from "classnames/bind";
import styles from './ModalCart.module.scss'
import './ModalCart.module.scss'
import images from "~/assets/images";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import Button from "~/components/Button";
const cx = classNames.bind(styles)

function ModalCart({ cartItem, setCart }) {
    const [priceTotal, setPriceTotal] = useState(0)
    const [amount, setAmount] = useState(1)

    const handlePrice = () => {
        let ans = 0;
        cartItem.map((item) => (
            ans += amount * item.price
        ))
        setPriceTotal(ans);
    }



    // const setDecrease = (product) => {
    //     const setId = cartItem.filter(
    //         (obj) => obj.id == product.id
    //     );
    //     const objIndex = cartItem.findIndex(
    //         (obj) => obj.id
    //     );
    //     console.log('d', setId[objIndex])
    //     console.log('do', product.id)
    //     if (setId[objIndex].id === product.id) {
    //         setAmount(cartItem.amountObj.amount - 1)
    //     }
    //     if (amount <= 1) {
    //         setAmount(1)
    //     }

    // }

    const handleChange = (item, d) => {
        let ind = -1;
        cartItem.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const objIndex = cartItem.findIndex(
            (obj) => obj.id === item.id
        );
        const newCart = { ...cartItem[objIndex], ...{ amount: amount } }
        const newAmount = newCart.amount += d;
        if (newCart.amount === 0)
            newCart.amount = 1;
        // const newCarts = {...cartItem, newCart}

        setAmount(newAmount)
        setCart([newCart])
    }

    // const setIncrease = (product, d) => {
    //     let ind = -1;
    //     cartItem.forEach((data, index) => {
    //         if (data.id === product.id) {
    //             ind = index;
    //         }
    //     });
    //     const objIndex = cartItem.findIndex(
    //         (obj) => obj.id === product.id
    //     );
    //     const newCart = { ...cartItem[objIndex], ...{ amount: amount } }
    //     newCart.amount = newCart.amount + d
    //     setCart([...arr, newCart])
    //     if (newCart) {
    //         setAmount(newAmount)
    //     }
    //     const {cartItem[objIndex],...rest} = cartItem
    //     console.log(cartItem)
    //     console.log(newCart)
    //     console.log([...arr,newCart])
    //     console.log(arr)
    //     console.log(deletedItem)
    // }


    const handleRemove = (id) => {
        const arr = cartItem.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    })

    const formattedAmount = priceTotal.toLocaleString('vi', { style: 'currency', currency: 'VND' }).replace(/\s/g, '');

    return (
        <div className={cx('modal__cart')}>
            {cartItem.map((product) => (
                <div key={product.id} className={cx('cart__item')}>
                    <img src={images.shoppingCart} alt="" />
                    <div className={cx('cart__hero')}>
                        <div className={cx('cart__info')}>
                            <h4 className={cx('cart__name')}>
                                {/* Gel rửa mặt cà phê Đắk Lắk 140ml */}
                                {product.name}
                            </h4>
                            <FontAwesomeIcon onClick={() => handleRemove(product.id)} icon={faXmark} />
                        </div>
                        <div className={cx('cart__wrap__price')}>
                            <div>
                                <Button onClick={() => handleChange(product, - 1)} quantity >-</Button>
                                <Button quantity>{product.amount ? product.amount : amount}</Button>
                                <Button onClick={() => handleChange(product, + 1)} quantity >+</Button>
                            </div>
                            <p className={cx('cart__price')}></p>
                            {product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' }).replace(/\s/g, '')}
                        </div>
                    </div>
                </div>
            ))}

            <div className={cx('footer-cart')}>
                <div >
                    <h4>Total</h4>
                    <h2>{formattedAmount}</h2>
                </div>
                <Button primary>
                    Check Out
                </Button>
            </div>
        </div>

    );
}


export default ModalCart;