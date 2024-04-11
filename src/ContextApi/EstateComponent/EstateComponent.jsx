import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const EstateContext = createContext();


const EstateComponent = ({ children }) => {
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

        <EstateContext.Provider value={{ estateData }}>
            {children}
        </EstateContext.Provider>
    );
};

export default EstateComponent;



EstateComponent.propTypes = {
    children: PropTypes.object.isRequired
}