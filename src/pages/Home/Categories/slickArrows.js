import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
 
function SlickPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}
 
function SlickNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}
 
export { SlickPrevArrow, SlickNextArrow };