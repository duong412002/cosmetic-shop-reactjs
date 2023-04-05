
import styles from './Contact.module.scss'
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap';


const cx = classNames.bind(styles)

function Contact() {
    return (
        <div className={cx("contact")}>
            <div className={cx('wrapper__contact__widget')}>
                <div className={cx("contact__widget")}>
                    <FontAwesomeIcon icon={faPhone} />
                    <h4>Phone</h4>
                    <p>+01-3-8888-6868</p>
                </div>
                <div className={cx("contact__widget")}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h4>Address</h4>
                    <p>60-49 Road 11378 New York</p>
                </div>
                <div className={cx("contact__widget")}>
                    <FontAwesomeIcon icon={faClock} />
                    <h4>Open time</h4>
                    <p>10:00 am to 23:00 pm</p>
                </div>
                <div className={cx("contact__widget")}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>Email</h4>
                    <p>hello@colorlib.com</p>
                </div>
            </div>

            <div className={cx("map")}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9376837517034!2d105.81743273035796!3d21.035179288833728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zMjg1IMSQ4buZaSBD4bqlbiwgVsSpbmggUGjDuiwgQmEgxJDDrG5oLCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1680018650613!5m2!1svi!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className={cx("map-inside")}>
                    {/* <i className="icon_pin"></i> */}
                    <FontAwesomeIcon className={cx("icon_pin")} icon={faLocationDot} />
                    <div className={cx("inside-widget")}>
                        <h4>Viet Nam</h4>
                        <ul>
                            <li>Phone: +12-345-6789</li>
                            <li>Add: 285 Doi Can</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx("contact-form")}>
                <Row>
                    <Col md={12}>
                        <div className={cx("contact__form__title")}>
                            <h2>Leave Message</h2>
                        </div>
                    </Col>
                </Row>
                <form action="#">
                    <Row>
                        <Col md={6}>
                            <input type="text" placeholder="Your name" />
                        </Col>
                        <Col md={6}>
                            <input type="text" placeholder="Your Email" />
                        </Col>
                        <Col md={12}>
                            <textarea placeholder="Your message"></textarea>
                            <Button flex primary type="submit">SEND MESSAGE</Button>
                        </Col>
                    </Row>
                </form>
            </div>

        </div>
    );
}

export default Contact;