import React, { useState, useEffect, useMemo } from 'react';
import { useGoogleLogout } from 'react-google-login'
import { setToken, deleteToken, getToken, setRefreshToken, deleteRefreshToken } from '../helpers/auth'
import { getCurrentUser } from '../helpers/users'
import { googleSignin } from '../helpers/auth'
import env from 'react-dotenv'
const UserContext = React.createContext();


export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [activation, setActivation] = useState(null);
    const [loadUser, setLoadUser] = useState(true);

    useEffect(() => {
        const loadUserInApp = async() =>{
            if(!getToken){
                setLoadUser(false);
                console.log("No hola")
                return;
            }
            try {
                const user = await getCurrentUser();
                setUser( user );
                setLoadUser(false);
                console.log("Hola")
            } catch (error) {
                console.log(error.response);
            }
        }
        loadUserInApp();
    }, []);


    const login = async(tokenId) => {
        googleSignin( tokenId )
        .then(
            (data) => {
                setUser(data.user);
                setLoadUser(false);
                setToken(data.xtoken);
                setRefreshToken(data.rtoken);
                setActivation(data.ActivationCode);
            }
        ).catch(

        )
    }


    const Logout = async() => {
        const { signOut, loaded } = useGoogleLogout({
            onFailure: () => console.log,
            clientId: env.GOOGLE_CLIENT_ID,
            cookiePolicy: 'single_host_origin',
            onLogoutSuccess: (response) => {
                deleteToken();
                deleteRefreshToken();
                setUser(null);
            }
        });
    }

    const value = useMemo(() => {
        return ({
            user,
            activation,
            loadUser,
            login,
            Logout
        })
    }, [user, activation, loadUser]);

    return <UserContext.Provider value={value} {...props} />
}

export const UseUser = () => {
    const context = React.useContext( UserContext );
    return context;
}