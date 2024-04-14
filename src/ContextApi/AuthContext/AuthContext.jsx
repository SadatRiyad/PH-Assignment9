import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext();


const AuthComponent = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
    }, []);

    return (

        <AuthContext.Provider value={
            {
                user,
                setUser
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthComponent;



AuthComponent.propTypes = {
    children: PropTypes.object.isRequired
}