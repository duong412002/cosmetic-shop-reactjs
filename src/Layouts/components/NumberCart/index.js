import Modal from 'react-bootstrap/Modal';
import { ModalCart } from '~/Layouts';
import './ModalBootstrap.scss'
import styles from './NumberCart.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import './ModalBootstrap.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles)

function NumberCart({ size, cart, setCart }) {



    const [shows, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const amount = 1800745;
    // const formattedAmount = amount.toLocaleString('vi', { style: 'currency', currency: 'VND' }).replace(/\s/g, '');

    return (
        <div className={cx('header__cart')}>
            <Button onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className={cx('wrap-quantity')}>
                    <span className={cx('quantity-cart')}>{size}</span>
                </div>
            </Button>
            <Modal show={shows} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ModalCart cartItem={cart} setCart={setCart} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NumberCart;