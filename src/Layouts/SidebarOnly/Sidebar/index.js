

import styles from './Sidebar.module.scss';
import * as categoryServices from '~/apiServices/categoryServices'

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Sidebar() {

    const [categoryValue, setCategoryValue] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryServices.category();

            setCategoryValue(result)
        }
        fetchApi();
    }, [])

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar__item')}>
                <h4>Categories</h4>
                <ul>
                    {categoryValue.map((category) => (
                        <li key={category.id}>
                            <Link>{category.name}</Link>
                        </li>
                    ))}
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