import React from 'react'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'

const CardTurno = ({Avatar,Titulo,Texto}) => {
    return (
        <div>
            <div className="grid grid-cols-12 bg-onPrimary ">
            <div className="col-span-1 flex flex-wrap justify-center items-center text-primary200">
                <Avatar>{Avatar}</Avatar>
            </div>
            <div className="col-span-10 mx-5">
                <div className="text-primary500 font-Roboto font-medium text-lg">{Titulo}</div>
                <div className="text-onBackground font-Roboto text-lg">{Texto}</div>
            </div>
            <div className="col-span-1 flex flex-wrap  items-center mx-4 text-primary200">
                <ArrowForwardIosRounded style={{fontSize:"100%"}}/>
            </div>
        </div>
        </div>
    )
}

export default CardTurno