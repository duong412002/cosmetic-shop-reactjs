import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sidebar from './Sidebar';
import Footer from '../components/Footer';
import styled from './SidebarOnly.module.scss'
import classNames from 'classnames/bind';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';
import BreadCrumb from '../components/BreadCrumb';

const cx = classNames.bind(styled)

function SidebarOnly({ children }) {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <BreadCrumb />
            <div className={cx('container')}>
                <Row>
                    <div className={cx('wrapper__content')}>
                        <Col md={3}><Sidebar /></Col>
                        <Col md={9}>
                            <div className={cx('content')}>{children}</div>
                        </Col>
                    </div>
                </Row>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarOnly;
