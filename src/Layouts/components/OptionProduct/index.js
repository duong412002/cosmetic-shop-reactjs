import { Link } from "react-router-dom";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMoneyCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import './OptionProduct.scss'

function OptionProduct(props) {
    return (
        <Fragment>
            <Tippy content="Look Detail" placement="top">
                <li className="product-item">
                    <Link to={`/shopDetails/${props.id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                </li>
            </Tippy>
            <Tippy content="Buy Now" placement="top">
                <li className="product-item">
                    <Link>
                        <FontAwesomeIcon icon={faMoneyCheck} />
                    </Link>
                </li>
            </Tippy>
            <Tippy content="Add to Cart" placement="top">
                <li className="product-item">
                    <Link  onClick={() => props.data.buyProduct(props.productCurrent)}>
                        <FontAwesomeIcon  icon={faShoppingCart} />
                    </Link>
                </li>
            </Tippy>
        </Fragment>
    );
}

export default OptionProduct;