
import styles from './Hero.module.scss';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { NumberCart } from '~/Layouts';

import Tippy from '@tippyjs/react/headless';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';


const cx = classNames.bind(styles)


function Hero() {

    const [visible, setVisible] = useState(false)

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    return (

        <div className={cx('hero')}>
            <div className={cx('container')}>
                <Row>
                    <div className={cx('wrap-hero')}>
                        <Col md={3}>
                            <div className={cx('hero__categories')}>
                                <Tippy
                                    interactive={true}
                                    visible={visible}
                                    onClickOutside={hide}
                                    render={(attrs) => (
                                        <div className={cx('categories')} tabIndex="-1" {...attrs}>
                                            <PopperWrapper >
                                                <Link to={'/shop'}> Vegetables </Link>
                                                <Link> Fruit & Nut Gifts </Link>
                                                <Link> Fresh Berries </Link>
                                                <Link> Ocean Foods </Link>
                                                <Link> Butter & Eggs </Link>
                                                <Link> Fastfood </Link>
                                                <Link> Fresh Onion </Link>
                                                <Link> Papayaya & Crisps </Link>
                                                <Link> Oatmeal </Link>
                                                <Link> Fresh Bananas </Link>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >

                                    <div onClick={visible ? hide : show} className={cx('hero__categories__all')}>
                                        <FontAwesomeIcon icon={faBars} />
                                        <span>All departments</span>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </Tippy>
                            </div>
                        </Col>

                        <Col md={8}>
                            <div className={cx('hero__search__form')}>
                                <form action="#">
                                    <input type="text" placeholder="What do yo u need?" />
                                    <Button primary>SEARCH</Button>
                                </form>
                            </div>
                        </Col>

                        <Col md={1}>
                            <NumberCart/>
                        </Col>
                    </div>
                </Row>
            </div>


        </div>
    );


}

export default Hero;