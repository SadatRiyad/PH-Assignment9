/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Facilities from "./Facilities";

const EstateDtails = () => {
    const estateData = useLoaderData();
    const { Id } = useParams();
    const IdInt = parseInt(Id);
    const theEstateData = estateData.find((estate) => estate.id === IdInt);
    const { area, description, estate_title, facilities, id, image, location, price, segment_name, status, locOnMap } = theEstateData;

    return (
        <div className="card-body px-1 md:px-4 lg:card-side bg-base-100 md:my-12">
            <div className="card-body bg-blue rounded-2xl lg:w-2/4 p-8 lg:p-6 justify-around">
                <div>
                    <img src={image} alt="estate" className="rounded-xl w-full transition-transform duration-300 transform" />
                </div>
                <div className="mt-8 lg:mt-1">
                    <h5 className="text-white font-semibold">View <a href="#loc" className="font-bold text-red">{location}</a> location on map:</h5>
                    <iframe id="loc" className="card mt-4 rounded-2xl border border-black" src={locOnMap} width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="card-body mt-6 lg:mt-0 lg:ml-5 p-0 lg:px-8 lg:w-3/4">
                <div className="flex gap-4 my-2">
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

                {/* <div className="card-actions justify-start mt-3 gap-1 md:gap-3">
                <a href="#"><button onClick={() => handleRead()} className="btn bg-transparent hover:bg-green border-primary text-primary hover:text-white rounded hover:border-green  hover:-translate-y-1 transition-all duration-200 ml-0">Read</button></a>
                <a href="#"><button onClick={() => handleWishlist()} className="btn bg-[#59C6D2] hover:bg-transparent border-[#59C6D2] text-white hover:text-[#59C6D2] hover:border-[#7cb1b7] rounded hover:-translate-y-1 transition-all duration-200">Wishlist</button></a>
            </div> */}
            </div>
            <ToastContainer />
        </div>
    );
};

export default EstateDtails;