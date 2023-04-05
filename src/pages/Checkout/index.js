
import classNames from "classnames/bind";
import styles from './Checkout.module.scss'
import { Row, Col } from "react-bootstrap";
import Button from "~/components/Button";

import './Checkout.module.scss'

const cx = classNames.bind(styles)

function Checkout() {
    return (
        <div className={cx("checkout")}>
            <div className={cx("checkout__form")}>
                <h4>Billing Details</h4>
                <form action="#">
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col md={6}>
                                    <div className={cx("checkout__input")}>
                                        <p>Fist Name<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={cx("checkout__input")}>
                                        <p>Last Name<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </Col>
                            </Row>
                            <div className={cx("checkout__input")}>
                                <p>Country<span>*</span></p>
                                <input type="text" />
                            </div>
                            <div className={cx("checkout__input")}>
                                <p>Address<span>*</span></p>
                                <input type="text" placeholder="Street Address" className={cx("checkout__input__add")} />
                                <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                            </div>
                            <div className={cx("checkout__input")}>
                                <p>Town/City<span>*</span></p>
                                <input type="text" />
                            </div>
                            <div className={cx("checkout__input")}>
                                <p>Country/State<span>*</span></p>
                                <input type="text" />
                            </div>
                            <div className={cx("checkout__input")}>
                                <p>Postcode / ZIP<span>*</span></p>
                                <input type="text" />
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className={cx("checkout__input")}>
                                        <p>Phone<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={cx("checkout__input")}>
                                        <p>Email<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                </Col>
                            </Row>
                            <div className={cx("checkout__input__checkbox")}>
                                <label for="acc">
                                    Create an account?
                                    <input type="checkbox" id="acc" />
                                    <span className={cx("checkmark")}></span>
                                </label>
                            </div>
                            <p>Create an account by entering the information below. If you are a returning customer
                                please login at the top of the page</p>
                            <div className={cx("checkout__input")}>
                                <p>Account Password<span>*</span></p>
                                <input type="text" />
                            </div>
                            <div className={cx("checkout__input__checkbox")}>
                                <label for="diff-acc">
                                    Ship to a different address?
                                    <input type="checkbox" id="diff-acc" />
                                    <span className={cx("checkmark")}></span>
                                </label>
                            </div>
                            <div className={cx("checkout__input")}>
                                <p>Order notes<span>*</span></p>
                                <input type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery." />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={cx("checkout__order")}>
                                <h4>Your Order</h4>
                                <div className={cx("checkout__order__products")}>Products <span>Total</span></div>
                                <ul>
                                    <li>Vegetable’s Package <span>$75.99</span></li>
                                    <li>Fresh Vegetable <span>$151.99</span></li>
                                    <li>Organic Bananas <span>$53.99</span></li>
                                </ul>
                                <div className={cx("checkout__order__subtotal")}>Subtotal <span>$750.99</span></div>
                                <div className={cx("checkout__order__total")}>Total <span>$750.99</span></div>
                                <div className={cx("checkout__input__checkbox")}>
                                    <label for="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or" />
                                            <span className={cx("checkmark")}></span>
                                    </label>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <div className={cx("checkout__input__checkbox")}>
                                    <label for="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment" />
                                            <span className={cx("checkmark")}></span>
                                    </label>
                                </div>
                                <div className={cx("checkout__input__checkbox")}>
                                    <label for="paypal">
                                        Paypal
                                        <input type="checkbox" id="paypal" />
                                            <span className={cx("checkmark")}></span>
                                    </label>
                                </div>
                                <Button primary >PLACE ORDER</Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div >
        </div >
    );
}

export default Checkout;