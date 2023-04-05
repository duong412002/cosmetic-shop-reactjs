
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import styles from './DefaulLayout.module.scss'

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <BreadCrumb />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default DefaulLayout;
