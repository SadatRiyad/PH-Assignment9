/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';


const EstateData = ({ estateData }) => {
    const { area, description, estate_title, facilities, id, image, location, price, segment_name, status } = estateData;
    // console.log(status)
    return (
        <div className="card bg-base-100 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <div>
                <figure className="p-4 w-full rounded-xl">
                    <img src={image} alt="book" className="rounded-xl w-full transition-transform duration-300 transform hover:scale-[1.03]" />
                </figure>
            </div>
            <div className="card-body items-start text-left px-5 pt-0">
                {/* <div className="flex gap-2 text-green  font-semibold">
                    {
                        tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                    }
                </div> */}
                <h2 className="card-title font-extrabold mt-2">{estate_title}</h2>
                <p className="pb-4 text-sm text-tertiary">{description}</p>
                <hr className="mb-2 w-full" />
                <div className="flex justify-between w-full gap-2">
                    <div>
                        <p className="flex items-center text-base font-semibold text-tertiary">{area}</p>
                    </div>
                    <div>
                        <p className="flex items-center text-base font-semibold text-tertiary">{location}</p>
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

