import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BsPhone } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Message sent successfully!", {
            type: "success",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            window.location.reload();
        }, 3500);
        // Add your form submission logic here
        console.log(formData);
        // You can send formData to your backend or handle it accordingly
    };

    return (
        <div className="container mx-auto px-4 pt-8 pb-6">
            <Helmet>
                <title>Contact Us | BB-RealEstate</title>
            </Helmet>
            <div className="py-8 bg-red rounded-xl mb-1 text-white">
                <h2 className="text-5xl text-center font-bold">Contact Us</h2>
            </div>
            <div className='text-center mb-10'>
                <h1 className="text-3xl font-bold mb-4"></h1>
                <p className="text-base px-2 text-secondary mb-0 font-medium">
                    Got any questions, suggestions, or feedback? <br />Feel free to reach out to us using the contact information below:
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4 px-8 py-16 bg-red rounded-xl">
                <div className='text-white'>
                    <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-4">
                            <FiMail />
                            <span>Email: info@BB-RealEstate.com</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <BsPhone />
                            <span>Phone: +1 (123) 456-7890</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <FaRegAddressCard />
                            <span>Address: 123 Main Street, City, Country</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4 mt-8 text-white">Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <button onClick={() => handleSubmit()}
                            type="submit"
                            className="w-full px-4 py-2 bg-blue text-white rounded-md hover:bg-white shadow-md border-2 hover:text-blue font-semibold hover:border-blue border-blue focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;