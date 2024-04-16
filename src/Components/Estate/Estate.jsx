import PropTypes from 'prop-types';
import EstateData from "./EstateData";

const Estate = ({ estateData }) => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-center" data-aos-delay="0"  className="py-20" id="estate">
            <h2 className="text-5xl text-center font-bold mb-4">Estates</h2>
            <p className="text-sm text-center px-4 md:px-20 mb-8 text-tertiary">Welcome to our Estates Section, where you can explore a curated selection of premium commercial properties tailored to meet your business needs. Whether you are looking for office space, retail storefronts, warehouses, or restaurants, we have a diverse range of options to suit your requirements.</p>
            <div className="text-start mt-8 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">

                    {estateData?.map((estateData) => (
                        <EstateData key={estateData.id} estateData={estateData} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Estate;

Estate.propTypes = {
    estateData: PropTypes.array.isRequired
}