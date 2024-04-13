import PropTypes from 'prop-types';
import { BsArrowRight } from "react-icons/bs";

const Facilities = ({ facilities }) => {
    return (
        <li className='flex gap-1'><BsArrowRight className=' mt-1' />{facilities}</li>
    );
};

export default Facilities;

Facilities.propTypes = {
    facilities: PropTypes.string.isRequired
}