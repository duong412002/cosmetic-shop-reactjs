import { Link } from "react-router-dom";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMoneyCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import './OptionProduct.scss'

function OptionProduct({ data,handleClickAddCart }) {

    

    return (
        <Fragment>
            <Tippy content="Look Detail" placement="top">
                <li className="product-item">
                    <Link to={`/shopDetails/${data.id}`}>
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
                    <Link onClick={() => handleClickAddCart(data)}>
                        <FontAwesomeIcon  icon={faShoppingCart} />
                    </Link>
                </li>
            </Tippy>
            <div>xin chao</div>
        </Fragment>
    );
}

export default OptionProduct;