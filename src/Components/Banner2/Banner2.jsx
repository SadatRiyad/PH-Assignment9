import { Link } from "react-router-dom";

const Banner2 = () => {
    return (
        <div className="card mb-20 mt-8 lg:card-side text-white shadow-xl bg-red p-4">
            <div className="w-full h-full flex lg:w-2/4 items-center justify-center">
                <div>
                    <figure><img className="rounded-lg" src="https://detroitwpresidence.b-cdn.net/wp-content/uploads/2022/08/team2.jpg" alt="Album" /></figure>
                </div>
            </div>
            <div className="card-body w-full lg:w-2/4 justify-center pl-1 lg:pl-8">
                <p className="card-title font-normal text-xs text-slate-100 uppercase">BB-RealEstate Agency</p>
                <h2 className="card-title font-bold text-2xl md:text-4xl lg:text-5xl">PROFESSIONAL <br />
                    REAL ESTATE AGENTS</h2>
                <p className="text-slate-50 text-base mt-4">Established in 2024, BB-RealEstate is now a locally owned most trustable real estate brokerage firm. Our firm is revolutionizing Commercial Real Estate Finance in ways that empower and enrich the richer.</p>
                <div className="card-actions justify-start">
                    <Link to="/contactUs" className="btn hover:-translate-y-1 transition-all duration-100">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner2;