
import classNames from "classnames/bind";
import styles from './ShoppingCart.module.scss'
import './ShoppingCart.module.scss'
import images from "~/assets/images";

import { Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from "~/components/Button";
import { faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

function ShoppingCart() {
    return (
        <div className={cx("shoping-cart")}>
            <Row>
                <Col md={12}>
                    <div className={cx("shoping__cart__table")}>
                        <Table>
                            <thead>
                                <tr>
                                    <th className={cx("shoping__product")}>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cx("shoping__cart__item")}>
                                        <img src={images.shoppingCart} alt="" />
                                        <h5>Vegetable’s Package</h5>
                                    </td>
                                    <td className={cx("shoping__cart__price")}>
                                        $55.00
                                    </td>
                                    <td className={cx("shoping__cart__quantity")}>
                                        <div className={cx("quantity")}>
                                            <div className={cx("pro-qty")}>
                                                <span className={cx("qtybtn")}>-</span>
                                                <input type="text" value="1" />
                                                <span className={cx("qtybtn")}>+</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx("shoping__cart__total")}>
                                        $110.00
                                    </td>
                                    <td className={cx("shoping__cart__item__close")}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx("shoping__cart__item")}>
                                        <img src={images.shoppingCart} alt="" />
                                        <h5>Vegetable’s Package</h5>
                                    </td>
                                    <td className={cx("shoping__cart__price")}>
                                        $55.00
                                    </td>
                                    <td className={cx("shoping__cart__quantity")}>
                                        <div className={cx("quantity")}>
                                            <div className={cx("pro-qty")}>
                                                <span className={cx("qtybtn")}>-</span>
                                                <input type="text" value="1" />
                                                <span className={cx("qtybtn")}>+</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx("shoping__cart__total")}>
                                        $110.00
                                    </td>
                                    <td className={cx("shoping__cart__item__close")}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx("shoping__cart__item")}>
                                        <img src={images.shoppingCart} alt="" />
                                        <h5>Vegetable’s Package</h5>
                                    </td>
                                    <td className={cx("shoping__cart__price")}>
                                        $55.00
                                    </td>
                                    <td className={cx("shoping__cart__quantity")}>
                                        <div className={cx("quantity")}>
                                            <div className={cx("pro-qty")}>
                                                <span className={cx("qtybtn")}>-</span>
                                                <input type="text" value="1" />
                                                <span className={cx("qtybtn")}>+</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx("shoping__cart__total")}>
                                        $110.00
                                    </td>
                                    <td className={cx("shoping__cart__item__close")}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>

            <div className={cx("shoping__cart__btns")}>
                <Button primary>CONTINUE SHOPPING</Button>
                <Button primary>
                    <FontAwesomeIcon icon={faSpinner} />
                    <span>Upadate Cart</span>
                </Button>
            </div>
            <div className={cx("wrapper__btns")}>
                <div className={cx("shoping__continue")}>
                    <div className={cx("shoping__discount")}>
                        <h5>Discount Codes</h5>
                        <form action="#">
                            <input type="text" placeholder="Enter your coupon code" />
                            <Button type="submit" primary>APPLY COUPON</Button>
                        </form>
                    </div>
                </div>
                <div className={cx("shoping__checkout")}>
                    <h5>Cart Total</h5>
                    <ul>
                        <li>Subtotal <span>$454.98</span></li>
                        <li>Total <span>$454.98</span></li>
                    </ul>
                    <Button primary>PROCEED TO CHECKOUT</Button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;