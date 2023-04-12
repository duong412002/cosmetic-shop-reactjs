import styles from './Blog.module.scss'
import './Blog.module.scss'
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import * as blogServices from '~/apiServices/blogServices'


import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles)

function Blog() {

    const [blogValue, setblogValue] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await blogServices.blog();
            setblogValue(result);
        }
        fetchApi();
    }, [])

    return (
        <div className={cx("blog")}>
            <Row>
                {blogValue.map((blog) => (
                    <Col md={4}  key={blog.id}>
                        <div className={cx("blog__item")}>
                            <div className={cx("blog__item__pic")}>
                                <img src={images.blog} alt="" />
                            </div>
                            <div className={cx("blog__item__text")}>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCalendar} /> May 4,2019</li>
                                    <li><FontAwesomeIcon icon={faComment} /> 5</li>
                                </ul>
                                <h5>
                                    <Link>{blog.title}</Link>
                                </h5>
                                <p>
                                    {blog.content}
                                </p>
                                <Link className={cx("blog__btn")}>
                                    READ MORE
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </Link>
                            </div>
                        </div>
                    </Col>
                ))}
                {/* <Pagination /> */}
            </Row>
        </div>
    );
}

export default Blog;