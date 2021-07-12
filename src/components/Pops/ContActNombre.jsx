import { Avatar } from '@material-ui/core'
import PropTypes from 'prop-types';
import React, { useRef } from 'react'
import { UseUser } from '../../Context/UserContext'
import { Skeleton } from '@material-ui/lab';

const ContActNombre = ({ name, setName }) => {
    const refInput = useRef(null);
    const {user, loadUser} = UseUser();
    const handleChange = () => {
        setName( refInput.current.value );
        //console.log(name);
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
            {
                loadUser
                ? <Skeleton variant="circle"/>
                : (
                    user.picture
                    ? <Avatar src={user.picture}/>
                    : <Avatar>{user.name.charAt(0)} </Avatar>
                )
            }
            </div>
            <div className="w-10/12 m-auto">
                <div className="bg-primary300 rounded-t-lg w-10/12 pl-4 py-1 font-Sans font-bold text-base text-onPrimary">Nombre</div>
                <input ref={refInput} onChange={handleChange} className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full border-2 border-primary300" type="text" value={name}/>
            </div>
        </div>
    )
}


ContActNombre.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired
};

export default ContActNombre
