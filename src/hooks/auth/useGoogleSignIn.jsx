import react, { useState, useEffect } from 'react';

import {googleSignin} from '../../helpers/auth'


export const useGoogleSignin = (id_token) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        googleSignin( id_token )
            .then(
                console.log
            )
    }, [id_token]);

    return state;
}