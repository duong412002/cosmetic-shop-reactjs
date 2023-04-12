
import { Link, NavLink, useParams } from 'react-router-dom';
import './Nav.scss'

function Nav() {

    const { pageShop } = useParams();
    console.log('pageShop',pageShop)
    return (
        <div className='header__menu'>
            <ul>
                <li><NavLink to={'/'} exact="true">Home</NavLink></li>
                <li><NavLink to={`/shop/1`}>Shop</NavLink></li>
                <li>Pages
                    <ul className='header__menu__dropdown'>
                        <li><Link to={'/shopDetails'}>Shop Details</Link></li>
                        <li><Link to={'/shoppingCart'}>Shoping Cart</Link></li>
                        <li><Link to={'/checkout'}>Check Out</Link></li>
                        <li><Link to={'/blogDetails'}>Blog Details</Link></li>
                    </ul>
                </li>
                <li><NavLink to={'/blog'}>Blog</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;