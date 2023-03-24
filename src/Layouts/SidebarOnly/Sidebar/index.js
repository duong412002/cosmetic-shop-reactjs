

import styles from './Sidebar.module.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar__item')}>
                <h4>Department</h4>
                <ul>
                    <li><Link >Fresh Meat</Link></li>
                    <li><Link >Vegetables</Link></li>
                    <li><Link >Fruit & Nut Gifts</Link></li>
                    <li><Link >Fresh Berries</Link></li>
                    <li><Link >Ocean Foods</Link></li>
                    <li><Link >Butter & Eggs</Link></li>
                    <li><Link >Fastfood</Link></li>
                    <li><Link >Fresh Onion</Link></li>
                    <li><Link >Papayaya & Crisps</Link></li>
                    <li><Link >Oatmeal</Link></li>
                </ul>
            </div>

            <div className={cx('sidebar__item')}>
                <h4>Price</h4>
                {/* <div className={cx('price-range-wrap')}>
                    <div className={cx('price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content')}
                        dataMin="10" dataMax="540">
                        <div className={cx('ui-slider-range ui-corner-all ui-widget-header')}></div>
                        <span tabindex="0" className={cx('ui-slider-handle ui-corner-all ui-state-default')}></span>
                        <span tabindex="0" className={cx('ui-slider-handle ui-corner-all ui-state-default')}></span>
                    </div>
                    <div className={cx('range-slider')}>
                        <div className={cx('price-input')}>
                            <input type="text" id="minamount" />
                            <input type="text" id="maxamount" />
                        </div>
                    </div>
                </div> */}
            </div>

            {/* <div className={('sidebar__item sidebar__item__color--option')}>
                <h4>Colors</h4>
                <div className={('sidebar__item__color sidebar__item__color--white')}>
                    <label for="white">
                        White
                        <input type="radio" id="white" />
                    </label>
                </div>
                <div className={('sidebar__item__color sidebar__item__color--gray')}>
                    <label for="gray">
                        Gray
                        <input type="radio" id="gray" />
                    </label>
                </div>
                <div className={('sidebar__item__color sidebar__item__color--red')}>
                    <label for="red">
                        Red
                        <input type="radio" id="red" />
                    </label>
                </div>
                <div className={('sidebar__item__color sidebar__item__color--black')}>
                    <label for="black">
                        Black
                        <input type="radio" id="black" />
                    </label>
                </div>
                <div className={('sidebar__item__color sidebar__item__color--blue')}>
                    <label for="blue">
                        Blue
                        <input type="radio" id="blue" />
                    </label>
                </div>
                <div className={('sidebar__item__color sidebar__item__color--green')}>
                    <label for="green">
                        Green
                        <input type="radio" id="green" />
                    </label>
                </div>
            </div> */}
        </div>
    );
}

export default Sidebar;