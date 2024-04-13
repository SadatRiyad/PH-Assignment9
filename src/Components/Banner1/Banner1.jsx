
const Banner1 = () => {
    return (
        <div className="md:px-4 bg-blue rounded-b-lg py-16 md:py-20" id='banner'>
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4 mb-12">Find Your Perfect Space from our all premium commercial properties and segments.</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-2">
                    <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex grow items-center px-6 py-3 bg-red">
                            <h1 className="mx-3 text-white font-semibold text-lg">Office Building</h1>
                        </div>
                        <div className="card-body py-4 px-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Modern Office Spaces</h1>
                            <p className="py-2 text-sm text-tertiary">Find the perfect office space to suit your business needs.</p>
                            <a href="#estate" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Estates</a>
                        </div>
                    </div>
                    <div className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-6 py-3 bg-red">
                            <h1 className="mx-3 text-white font-semibold text-lg">Retail Space</h1>
                        </div>
                        <div className="card-body py-4 px-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Dynamic Retail Spaces</h1>
                            <p className="py-2 text-sm text-tertiary">Find prime retail locations to elevate your brand.</p>
                            <a href="#estate" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Estates</a>
                        </div>
                    </div>
                    <div className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-6 py-3 bg-red">
                            <h1 className="mx-3 text-white font-semibold text-lg">Commercial</h1>
                        </div>
                        <div className="card-body py-4 px-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Commercial Spaces</h1>
                            <p className="py-2 text-sm text-tertiary">Explore commercial space located in a busy shopping district.</p>
                            <a href="#estate" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Estates</a>
                        </div>
                    </div>
                    <div className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-6 py-3 bg-red">
                            <h1 className="mx-3 text-white font-semibold text-lg">Warehouse</h1>
                        </div>
                        <div className="card-body py-4 px-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Warehouse Complex</h1>
                            <p className="py-2 text-sm text-tertiary">Find cutting-edge industrial spaces for your operations.</p>
                            <a href="#estate" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-4">View Estates</a>
                        </div>
                    </div>
                    <div className="card grow bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center px-6 py-3 bg-red">
                            <h1 className="mx-3 text-white font-semibold text-lg">Restaurant</h1>
                        </div>
                        <div className="card-body py-4 px-6">
                            <h1 className="text-2xl font-semibold text-gray-800">Restaurant Spaces</h1>
                            <p className="py-2 text-sm text-tertiary">Find restaurant with fully equipped kitchen and outdoor patio.</p>
                            <a href="#estate" className="btn bg-red hover:bg-red border-red text-white hover:text-white rounded hover:border-red  hover:-translate-y-1 transition-all duration-200 font-bold mt-2">View Estates</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner1;