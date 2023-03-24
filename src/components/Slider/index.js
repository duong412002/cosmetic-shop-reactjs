
import classNames from "classnames/bind";
import styles from './Slider.module.scss';


const cx = classNames.bind(styles);

function Slider({ children, ...passProps }) {

    const props = {
        ...passProps,
    }

    return (
        <Slider {...props}>
            <span>{children}</span>
        </Slider>
    )

}

export default Slider;