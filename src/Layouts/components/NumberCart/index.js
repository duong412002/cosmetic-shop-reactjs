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
import { connect } from 'react-redux';
import { getSizeCart } from '~/redux/actions/action';

const cx = classNames.bind(styles)

function NumberCart(props) {
    const [shows, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={cx('header__cart')}>
            <Button onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className={cx('wrap-quantity')}>
                    <span className={cx('quantity-cart')}>{props.cart.length ? props.cart.length : 0}</span>
                </div>
            </Button>
            <Modal show={shows} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ModalCart />
                </Modal.Body>
            </Modal>
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
        getSizeCart: (product_current) =>
            dispatch(getSizeCart(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberCart);