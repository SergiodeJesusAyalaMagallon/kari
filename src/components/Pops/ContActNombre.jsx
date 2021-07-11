import { Avatar } from '@material-ui/core'
import PropTypes from 'prop-types';
import React, { useRef } from 'react'

const ContActNombre = ({ name, setName }) => {
    const refInput = useRef(null);

    const handleChange = () => {
        setName( refInput.current.value );
        console.log(name);
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
            {
                localStorage.getItem('picture') 
                ? <Avatar style={{width:"50%",height:"50%",}} src={localStorage.getItem('picture')}/>
                : <Avatar style={{width:"50%",height:"50%",}}>{window.localStorage.getItem('user').charAt(0)} </Avatar>
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
