
const FAQsection = () => {
    return (
        <div className="pt-12 pb-8 bg-slate-100 px-2">
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-anchor-placement="top-bottom" data-aos-delay="0" >
                <h2 className="text-5xl text-center font-bold mb-4">FAQ&apos;s</h2>
                <p className="w-3/4 mx-auto text-center text-sm md:text-base text-tertiary mb-8">Have a question? Check out our frequently asked questions to find the answers you need. If you don&apos;t see your question listed, feel free to contact us for more information.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-b collapse collapse-arrow text-white bg-blue focus:bg-red">
                {/* <input type="checkbox" /> */}
                <div className="collapse-title text-xl font-medium">
                    Q: What sets BB-RealEstate apart from other real estate platforms?
                </div>
                <div className="collapse-content">
                    <p>A: At BB-RealEstate, we pride ourselves on our personalized approach to real estate. Our dedicated team of experts goes above and beyond to understand your unique needs and preferences, ensuring a seamless and stress-free experience from start to finish.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-red">
                {/* <input type="checkbox" /> */}
                <div className="collapse-title text-xl font-medium">
                    Q: Can I schedule a viewing for a property I am interested in?
                </div>
                <div className="collapse-content">
                    <p>A: Yes, you can schedule a viewing for any property listed on our website. Simply click on the property listing to view more details, then use the provided contact information or fill out the viewing request form to schedule an appointment with one of our agents.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-red">
                {/* <input type="checkbox" /> */}
                <div className="collapse-title text-xl font-medium">
                    Q: How experienced is the team at BB-RealEstate?
                </div>
                <div className="collapse-content">
                    <p>A: Our team brings years of collective experience and expertise to the table. From seasoned real estate agents to industry veterans, each member of our team is committed to delivering exceptional service and results for our clients.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-none collapse collapse-arrow text-white bg-blue focus:bg-red">
                {/* <input type="checkbox" /> */}
                <div className="collapse-title text-xl font-medium">
                    Q: Can I trust BB-RealEstate to find the perfect property for me?
                </div>
                <div className="collapse-content">
                    <p>A: Absolutely! We understand that buying, selling, or renting a property is a significant decision, and we take our responsibility to our clients very seriously. With our extensive network, market knowledge, and dedication to customer satisfaction, you can trust us to help you find your dream property.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="7000" data-aos-anchor-placement="top-bottom" data-aos-delay="50" tabIndex={0} className="rounded-t mb-1 collapse collapse-arrow text-white bg-blue focus:bg-red">
                {/* <input type="checkbox" /> */}
                <div className="collapse-title text-xl font-medium">
                    Q: How can I get in touch with BB-RealEstate for further inquiries?
                </div>
                <div className="collapse-content">
                    <p>A: We are always here to help! You can contact us via phone, email, or by filling out the contact form on our website. Our friendly and knowledgeable team is ready to answer any questions you may have and provide you with the assistance you need.</p>
                </div>
            </div>
        </div>

    );
};

export default FAQsection;