import images from "~/assets/images";
import styles from "./BreadCrumb.module.scss";
import classNames from 'classnames/bind';
import "./BreadCrumb.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)
function BreadCrumb() {

    const path = window.location.pathname;
    const cleanedPath = path.replace(/\//g, '');
    const newStr = cleanedPath.replace(/([a-z])([A-Z])/g, '$1 $2');

    let sectionStyle;
    if (newStr === '') {
        sectionStyle = {
            display: 'none',
        };
     }
    


    console.log(newStr);
    return (
        <div className={cx("breadcrumb-section")} style={sectionStyle} >
            <img src={images.breadCrumb} alt="" />
            <div className={cx("breadcrumb__text")} >
                <div>{newStr}</div>
                <div>
                    <Link to={'/'}>Home</Link>
                    <span>-</span>
                    <h2>{newStr}</h2>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;