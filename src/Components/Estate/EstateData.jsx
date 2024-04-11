import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const EstateData = ({ estateData }) => {
    const { area, description, estate_title, id, image, location, price, status } = estateData;
    return (
        <div className="card bg-base-100 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <div>
                <figure className="p-4 w-full rounded-xl">
                    <img src={image} alt="estase" className="relative rounded-xl w-full transition-transform duration-300 transform" />
                    <div className='absolute bg-red px-4 py-1 rounded-2xl top-6 right-6'>
                        <h5 className='text-white font-bold shadow-lg'>{status}</h5>
                    </div>
                </figure>
            </div>
            <div className="card-body items-start text-left px-5 pt-0">
                <h2 className="card-title font-extrabold mt-2">{estate_title} for {status}</h2>
                <h3 className='font-bold text-blue mt-0 pt-0'>{price}</h3>
                <p className="pb-4 text-xs text-tertiary">{description}</p>
                <hr className="mb-2 w-full" />
                <div className="flex justify-between items-center w-full gap-2">

                    <div>
                        <div className='flex items-center gap-1 mb-1'>
                            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.500145 0H0.000160627V5.50004H1.0001V1.70713L5.14654 5.85362L5.85368 5.14647L1.70724 0.999979H5.50011V3.21257e-05L0.500145 0ZM14.5 0H15V5.50004H14.0001V1.70713L9.85362 5.85362L9.14648 5.14647L13.2929 0.999979H9.50005V3.21257e-05L14.5 0ZM15 15H9.50002V14.0001H13.2929L9.14644 9.85357L9.85359 9.14641L14 13.2929V9.49999H15L15 15ZM0.499984 15H0V9.49996H0.999935V13.2929L5.14638 9.14638L5.85352 9.85353L1.70708 14H5.49995V15L0.499984 15Z" fill="red"></path></svg>
                            <p className="text-xs font-semibold text-red mr-2">{area}</p>
                        </div>
                        <p className="flex items-center text-xs font-semibold text-red"><FaLocationDot className='mr-1' />{location}</p>
                    </div>
                    <div>
                        <Link to={`/estateDetails/id/${id}`} className="btn bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red transition-all duration-200 font-bold mt-0">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateData;


EstateData.propTypes = {
    estateData: PropTypes.object.isRequired
}