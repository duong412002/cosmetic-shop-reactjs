

import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';


import classNames from 'classnames/bind';
import { Fragment } from 'react';
import Categories from './Categories';
import Featured from './Featured';



const cx = classNames.bind(styles)

function Home() {
    return (
        <Fragment>
            <div className={cx("home__item")}>
                <img src={images.banner} alt='' />
                <div className={cx("home__text")}>
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable <br />100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <Button primary to={'/shop'}>SHOP NOW</Button>
                </div>
            </div>
            <Categories></Categories>
            <Featured></Featured>
        </Fragment>
    );
}

export default Home;