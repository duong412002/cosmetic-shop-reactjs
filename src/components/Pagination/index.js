
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import styles from './Pagination.module.scss';
import './Pagination.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';



// Pagination.propTypes = {
//     pagination: PropTypes.object.isRequired,
//     onPageChange: PropTypes.func,
// };

// Pagination.defaultProps = {
//     onPageChange: null,
// }


const cx = classNames.bind(styles)

function Pagination({ sz, page, totalProduct, paginate, onPageChange }) {

    const totalPage = Math.ceil(totalProduct / sz - 1);
    const {pageShop} = useParams();
    const pageNumbers = [];
    const pageNew = pageShop - 1;
    const pages = page + 1;
    
    // console.log('totalpage: ', totalPage)
    // console.log('totalProduct: ', totalProduct)
    // console.log('sz: ', sz)
    // console.log('pageShop: ', pageShop)
    // console.log('pages: ', pages)

    for (let i = 0; i <= totalPage; i++) {
        pageNumbers.push(i);
    }

    const handlePaginate = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <Col md={12}>
            <div className={cx("blog__pagination")}>
                <Button
                    to={`/shop/${pages - 1}`}
                    onClick={() => handlePaginate(page - 1)}
                    disabled={pages <= 1}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Button>

                {pageNumbers.map(number => (
                    <Button
                        key={number}
                        to={`/shop/${number + 1}`}
                        onClick={() => paginate(number)}
                        className={cx(`${number === pageNew ? 'active' : ''}`)}
                    >{number + 1}</Button>

                ))}

                <Button
                    to={`/shop/${pages + 1}`}
                    onClick={() => handlePaginate(page + 1)}
                    disabled={pages > totalPage}
                >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </Button>
            </div>
        </Col>
    );
}

export default Pagination;