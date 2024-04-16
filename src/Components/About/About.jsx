import { Helmet } from 'react-helmet-async';
import aboutPic from '../../assets/about.jpg';

const About = () => {
    return (
        <div className="container mx-auto px-4 pt-6 pb-4 bg-red text-white">
            <Helmet>
                <title>About | BB-RealEstate</title>
            </Helmet>
            <div className='w-full p-4 h-fit'>
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className='w-full h-fit rounded-lg'>
                    <img className='w-full rounded-lg' src={aboutPic} alt="" />
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="1500"  className='text-center mt-12 mb-10 mx-1'>
                <h1 className="text-2xl md:text-4xl font-bold mb-5 md:mb-7">Welcome to <span className='text-blue'>&apos;BB-RealEstate&apos;</span></h1>
                <p className="text-sm md:text-base mb-4 md:mx-2">
                    Welcome to BB-RealEstate, your premier destination for Commercial Real Estate. Whether you are searching for your Office buildings, retail spaces, warehouses, industrial
                    facilities, restaurants, entertainment venues etc. We are here to assist you every step of the way.
                </p>
                <p className="text-sm md:text-base mb-4 md:mx-2">
                    Our dedicated team of experts is committed to providing you with comprehensive information, personalized advice, and unparalleled service to help you achieve your real estate goals. From residential properties to commercial spaces, we offer a diverse range of listings to cater to your unique needs and preferences.
                </p>
                <p className="text-sm md:text-base mb-4 md:mx-2">
                    At BB-RealEstate, we understand that buying, selling, or renting a property can be a significant decision. That is why we strive to make the process as seamless and stress-free as possible for our clients. With our expertise and resources, you can trust us to navigate the real estate market with confidence and success.
                </p>
            </div>
            <div className="pt-12 px-1">
                <div data-aos="fade-right" data-aos-duration="900" data-aos-anchor-placement="top-down" data-aos-delay="150"  tabIndex={0} className="rounded-b collapse collapse-arrow text-white bg-blue focus:bg-blue">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Q: What sets BB-RealEstate apart from other real estate platforms?
                    </div>
                    <div className="collapse-content">
                        <p>A: At BB-RealEstate, we pride ourselves on our personalized approach to real estate. Our dedicated team of experts goes above and beyond to understand your unique needs and preferences, ensuring a seamless and stress-free experience from start to finish.</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="900" data-aos-anchor-placement="top-down" data-aos-delay="200" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-blue">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Q: How experienced is the team at BB-RealEstate?
                    </div>
                    <div className="collapse-content">
                        <p>A: Our team brings years of collective experience and expertise to the table. From seasoned real estate agents to industry veterans, each member of our team is committed to delivering exceptional service and results for our clients.</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="900" data-aos-anchor-placement="top-down" data-aos-delay="250"  tabIndex={0} className="rounded-t mb-1 collapse collapse-arrow text-white bg-blue focus:bg-blue">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Q: Can I trust BB-RealEstate to find the perfect property for me?
                    </div>
                    <div className="collapse-content">
                        <p>A: Absolutely! We understand that buying, selling, or renting a property is a significant decision, and we take our responsibility to our clients very seriously. With our extensive network, market knowledge, and dedication to customer satisfaction, you can trust us to help you find your dream property.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
