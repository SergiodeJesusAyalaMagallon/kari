import React from 'react'
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded'
import { Avatar } from '@material-ui/core'

const CardTurno = ({AvatarL,Titulo,Texto}) => {
    return (
        <div>
            <div className="grid grid-cols-12 py-2">
                <div className="col-span-2 flex flex-wrap justify-center items-center text-primary200">
                    <Avatar>{AvatarL}</Avatar>
                </div>
                <div className="col-span-9 mx-5">
                    <div className="text-primary500 font-Roboto font-medium text-lg text-left">{Titulo}</div>
                    <div className="text-onBackground font-Roboto text-lg text-left">{Texto}</div>
                </div>
                <div className="col-span-1 flex flex-wrap  items-center text-primary200">
                    <ArrowForwardIosRounded style={{fontSize:"100%"}}/>
                </div>
            </div>
        </div>
    )
}

export default CardTurno