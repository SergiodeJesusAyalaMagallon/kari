
import { useState, useEffect } from 'react';

import { setUserName } from '../../helpers/users';


export const UseNameChange = ( name ) => {
    const [state, setState] = useState({
        data: [],
        loading: false,
        error: false
    });

    useEffect( () => {
        console.log('iniciando')
        if(name){
            setState({
                data: [],
                loading: true, 
                error: false
            });
            setUserName( name )
            .then(
                (data) => {
                    console.log(data)
                    setState({
                        data,
                        loading: false,
                        error: false
                    });
                }
            ).catch(
                (error) => {
                    console.log(error)
                    setState({
                        data: error,
                        loading: false,
                        error: true
                    });
                }
            )
        }
    }, [name]);

    return state;
}