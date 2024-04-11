import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext();


const AuthComponent = ({ children }) => {
    // fetch data from api here and store it in the state variable below.
    const [estateData, setEstateData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('./fakeData.json');
        const data = await response.json();
        setEstateData(data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <AuthContext.Provider value={{ estateData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthComponent;



AuthComponent.propTypes = {
    children: PropTypes.object.isRequired
}