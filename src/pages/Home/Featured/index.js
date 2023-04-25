
import styles from './Featured.module.scss';
import classNames from "classnames/bind";
import images from '~/assets/images';
import './Featured.module.scss';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as productServices from '~/apiServices/productServices'
import { OptionProduct } from '~/Layouts';
import FormatPrice from '~/Helpers/FormatPrice';

const cx = classNames.bind(styles);
function Featured() {

    const [featureds, setFeatured] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productServices.product(0, 4)
            setFeatured(result);
        }
        fetchApi();
    }, [])   

    return (
        <div className={cx("featured")}>
            <Row>
                <Col md={12}>
                    <div className={cx("section-title")}>
                        <h2>Featured Product</h2>
                    </div>
                    {/* <div className={cx("featured__controls")}>
                        <ul>
                            data-filter="*"
                            <li className={cx("active")}>All</li>
                            dataFilter=".oranges"
                            <li>Oranges</li>
                            <li>Fresh Meat</li>
                            <li>Vegetables</li>
                            <li>Fastfood</li>
                        </ul>
                    </div> */}
                </Col>
            </Row>
            <div className={cx("featured__filter")}>
                <Row>
                    {featureds.map((featured) => (
                        <Col md={3} key={featured.id}>
                            <div className={cx("featured__item")}>
                                <div className={cx("featured__item__pic")}>
                                    <img src={images.featured} alt='' />
                                    <ul className={cx("featured__item__pic__hover")}>
                                        <OptionProduct data={featured} />
                                    </ul>
                                </div>
                                <div className={cx("featured__item__text")}>
                                    <h5><Link>{featured.name}</Link></h5>
                                    <div className={cx("featured__item__price")}>
                                    <FormatPrice price={featured.price}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Featured;