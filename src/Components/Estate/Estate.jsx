import PropTypes from 'prop-types';
import EstateData from "./EstateData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Estate.css';

const Estate = ({ estateData }) => {
    return (
        <div className="py-20" id="estate">
            <h2 className="text-5xl text-center font-bold mb-4">Estates</h2>
            <p className="text-sm text-center px-4 md:px-20 mb-8 text-tertiary">Welcome to our Estates Section, where you can explore a curated selection of premium commercial properties tailored to meet your business needs. Whether you are looking for office space, retail storefronts, warehouses, or restaurants, we have a diverse range of options to suit your requirements.</p>
            <div className="text-start">
                <div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        pagination={{ clickable: true }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {estateData?.map((estateData) => (
                            <SwiperSlide key={estateData.id}>
                                <EstateData key={estateData.id} estateData={estateData} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Estate;

Estate.propTypes = {
    estateData: PropTypes.array.isRequired
}