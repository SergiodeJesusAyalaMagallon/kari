import React from 'react'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'
import Avatar from '@material-ui/core/Avatar';

const CarITFV2 = () => {
    return (
        <div className="grid grid-cols-12 bg-onPrimary rounded-full text-primary500">
            <div className="col-span-2 py-2 flex flex-wrap justify-center items-center">
                <Avatar>J</Avatar>
            </div>
            <div className="col-span-9 ml-5 flex flex-wrap  items-center font-Roboto font-extrabold text-left">Actualizar foto de perfil</div>
            <div className="col-span-1 flex flex-wrap  items-center mx-4 text-primary200">
                <ArrowForwardIosRounded style={{fontSize:"100%"}}/>
            </div>
        </div>
    )
}

export default CarITFV2
