import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const AppContent = createContext();

export const AppContextProvider = (props) => {

    // Pass cookies to keep user logged in until token expires 
    axios.defaults.withCredentials = true;

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);
    const [theme, setTheme] = useState(true);
    const [leftPanel, setLeftPanel] = useState(false);


    // To call this function whenever the webpage is loaded, we use useEffect
    const getAuthState = async () => {
        try {

            const {data} = await axios.get(backendUrl + "/api/auth/is-auth");
            if (data.success) {
                setIsLoggedin(true);
                getUserData();
            }

        } catch(error) {
            ;//console.log(error.response.data.message)
        }
    }

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + "/api/user/data");
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch(error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAuthState();
    }, [])

    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData,
        theme, setTheme,
        leftPanel,setLeftPanel
    }


    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}