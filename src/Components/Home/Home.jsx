// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../Banner1/Banner1';
import Estate from '../Estate/Estate';


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
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero a1 min-h-screen">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="px-8">
                                <h1 className="mb-6 text-2xl lg:text-5xl md:text-5xl font-bold">Experience the Future <br /> of Commercial Real Estate</h1>
                                <p className="mb-5 px-6 lg:px-24 text-sm lg:text-base md:text-base">Step into the future with BB-RealEstate. <br /> Our innovative approach to commercial real estate combines cutting-edge technology, industry expertise, and personalized service to redefine the way you do business.</p>
                                <a href='#banner' className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Get Started</a>
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
                                <a href='#banner' className="btn absolute bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold -mt-8 md:mt-0">Explore Now</a>
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
                                <a href='#banner' className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Banner1></Banner1>
            <Estate></Estate>
        </div>
    );
};

export default Home;






// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0730000000003!2d-73.9854286845949!3d40.74881797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f5f1b1f1b%3A0x1b8b9b7f3e1b1b1d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sbd!4v1631773660003!5m2!1sen!2sbd" width="100%" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>