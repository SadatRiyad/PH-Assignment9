/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Facilities from "./Facilities";
import { useState } from "react";

const EstateDtails = () => {
    const estateData = useLoaderData();
    const { Id } = useParams();
    const IdInt = parseInt(Id);
    const theEstateData = estateData.find((estate) => estate.id === IdInt);
    const { area, description, estate_title, facilities, id, image, location, price, segment_name, status, locOnMap } = theEstateData;


    const [tourFormData, setTourFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        tourType: '',
        tourTime: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        setTourFormData({
            ...tourFormData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log("Tour Form Data:", tourFormData);
        toast("Your tour has been scheduled successfully! We will contact you shortly to confirm the details.")
        // Reset form fields after submission
        setTourFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            tourType: '',
            tourTime: ''
        });
    };

    return (
        <>
            <div className="card-body px-1 md:px-4 lg:card-side bg-base-100 md:my-8">
                <div className="card-body bg-blue rounded-2xl lg:w-2/4 p-8 lg:p-6 justify-around">
                    <div>
                        <img src={image} alt="estate" className="rounded-xl w-full transition-transform duration-300 transform" />
                    </div>
                    <div className="mt-8 lg:mt-1">
                        <h5 className="text-white font-semibold">View <a href="#loc" className="font-bold text-red">{location}</a> location on map:</h5>
                        <iframe id="loc" className="card mt-4 rounded-2xl border border-black" src={locOnMap} width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="card-body mt-6 lg:mt-0 lg:ml-5 px-4 lg:px-8 lg:w-3/4">
                    <div className="flex items-center gap-4 my-2">
                        <div className='bg-red px-6 py-1 rounded-2xl top-2 right-2 w-fit'>
                            <h5 className='text-white font-bold shadow-lg'>{status}</h5>
                        </div>
                        <div className='bg-red px-6 py-1 rounded-2xl top-2 right-2 w-fit'>
                            <h5 className='text-white font-bold shadow-lg'>{segment_name}</h5>
                        </div>
                    </div>
                    <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-blue">{estate_title} for <span className="text-red">{status}</span></h2>
                    <p className="text-tertiary font-semibold text-xs md:text-base lg:text-lg mt-4"><span>{description}</span></p>
                    <hr className="mt-2 lg:my-4 border-t-2" />
                    <span className="text-xs md:text-base lg:text-xl mt-2 text-blue font-bold">Facilities : </span>
                    <ul className="text-red font-semibold text-xs md:text-base lg:text-lg">{
                        facilities.map((facilities, index) => <Facilities key={index} facilities={facilities}></Facilities>)}
                    </ul>
                    <hr className="mt-2 lg:my-4 border-t-2" />
                    <p className="text-blue font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Property ID : </span> 0{id}</p>
                    <p className="text-blue font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Segment Name : </span> {segment_name}</p>
                    <p className="text-blue font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Status : </span> {status}</p>
                    <p className="text-blue font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Area : </span> {area}</p>
                    <p className="text-blue font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Location : </span> {location}</p>
                    <p className="text-blue font-semibold text-xs md:text-base lg:text-lg mt-1"><span className="text-tertiary font-bold">Price : </span> {price}</p>
                    <hr className="mt-1 lg:my-4 border-t-2" />
                </div>
            </div>
            {/* Schedule a Tour Section */}
            <div className="p-5 bg-red mb-12 rounded-xl mx-4">
                <h3 className="px-0 text-3xl text-white text-center font-bold shadow-lg mb-8 py-4">Schedule a Tour</h3>
                <form onSubmit={handleFormSubmit}>
                    {/* Tour Type */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full mb-4">
                        <div className="mb-4 text-white w-full">
                            <label htmlFor="tourType" className="block mb-2 font-semibold">Select the tour type:</label>
                            <select id="tourType" name="tourType" onChange={handleInputChange} value={tourFormData.tourType} required className="border rounded-md px-3 py-2 w-full text-blue text-base">
                                <option value="">Select Tour Type</option>
                                <option value="In Person">In Person</option>
                                <option value="Video Chat">Video Chat</option>
                            </select>
                        </div>
                        <div className="mb-4 text-white w-full">
                            <label htmlFor="tourTime" className="block mb-2 font-semibold">Select the time:</label>
                            <select id="tourTime" name="tourTime" onChange={handleInputChange} value={tourFormData.tourTime} required className="border rounded-md px-3 py-2 w-full text-blue text-base">
                                <option value="">Select Time</option>
                                <option value="10:00 am">10:00 am</option>
                                <option value="11:00 am">11:00 am</option>
                                <option value="12:00 pm">12:00 pm</option>
                                <option value="01:00 pm">01:00 pm</option>
                                <option value="02:00 pm">02:00 pm</option>
                                <option value="03:00 pm">03:00 pm</option>
                                <option value="04:00 pm">04:00 pm</option>
                            </select>
                        </div>
                    </div>
                    {/* Your Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-semibold text-white">Your Name:</label>
                            <input type="text" placeholder="Abc Xyz" id="name" name="name" onChange={handleInputChange} value={tourFormData.name} required className="border rounded-md px-3 py-2 w-full" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-semibold text-white">Your Email:</label>
                            <input type="email" placeholder="example@mail.com" id="email" name="email" onChange={handleInputChange} value={tourFormData.email} required className="border rounded-md px-3 py-2 w-full" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 font-semibold text-white">Your Phone:</label>
                            <input placeholder="+8801700112233" type="tel" id="phone" name="phone" onChange={handleInputChange} value={tourFormData.phone} required className="border rounded-md px-3 py-2 w-full" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 font-semibold text-white">Your Message:</label>
                        <textarea placeholder={`I would like to schedule a tour for "${estate_title}" for ${status}.`} type="textarea" cols="50" rows="5" id="message" name="message" onChange={handleInputChange} value={tourFormData.message} required className="border rounded-md px-3 py-2 w-full" />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn bg-blue hover:bg-white border-blue text-white hover:text-blue rounded hover:border-white w-full mb-6 transition-all hover:translate-y-1 duration-200 font-bold mt-5 shadow-2xl">Schedule Tour</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default EstateDtails;