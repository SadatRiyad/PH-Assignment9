import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        // <!-- error page start -->
        <div className="flex justify-center items-center text-center h-screen">
            <div id="error-page">
                <span className="text-6xl font-bold">{error.status}</span>
                <h1 className="mb-2 mt-4 text-xl font-bold">Oops! Page not found.</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button onClick={() => window.history.back()} className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue rounded hover:border-blue  hover:-translate-y-1 transition-all duration-200 my-4">Go Back</button>
            </div>
        </div>

    );
};

export default ErrorPage;