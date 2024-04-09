// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <div className="hero a1 min-h-screen">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="px-8">
                                <h1 className="mb-6 text-2xl lg:text-5xl md:text-5xl font-bold">Experience the Future <br /> of Commercial Real Estate</h1>
                                <p className="mb-5 px-6 lg:px-24 text-sm lg:text-base md:text-base">Step into the future with BB-RealEstate. <br /> Our innovative approach to commercial real estate combines cutting-edge technology, industry expertise, and personalized service to redefine the way you do business.</p>
                                <button className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero a2 min-h-screen">
                        <div className="hero-content text-left text-white shadow-lg hero-overlay bg-opacity-30  md:bg-opacity-15 relative">
                            <div className="px-8">
                                <h1 className="mb-6 text-2xl lg:text-3xl md:text-3xl font-bold">Unlock Opportunities <br /> for Growth</h1>
                                <p className='text-sm'>With BB-RealEstate, <br /> unlock opportunities for growth and expansion.</p>
                                <p className="text-sm opacity-0 my-0">Unlock opportunities for growth and expansion. Our portfolio features prime locations, state-of-the-art facilities, and dynamic environments conducive to innovation and productivity.</p>
                                <button className="btn absolute bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold -mt-8 md:mt-0">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero a3 min-h-screen">
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="px-8">
                                <h1 className="mb-6 text-2xl lg:text-5xl md:text-5xl font-bold">Discover Your Perfect Workspace</h1>
                                <p className="mb-5 px-6 lg:px-24 text-sm lg:text-base md:text-base">Explore a diverse range of commercial properties, from sleek office buildings to bustling retail spaces, tailored to meet your business needs. Find the ideal location to elevate your brand and drive success.</p>
                                <button className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Discover Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;