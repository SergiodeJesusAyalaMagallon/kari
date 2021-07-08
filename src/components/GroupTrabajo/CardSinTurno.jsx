import React from 'react'
import { InboxRounded } from '@material-ui/icons'
const CardSinTurno = () => {
    return (
        <div className="grid bg-onPrimary w-10/12 lg:w-5/12 m-auto rounded-2xl">
            <div className="bg-primary700 text-primary200 grid grid-cols-12 rounded-t-2xl">
                <div className="text-xl font-Sans font-extrabold my-4 ml-6 col-span-9">Personas sin turno</div>
            </div>
            <div className="bg-background grid grid-cols-1 w-9/12 m-auto rounded-lg my-10 pt-5">
                <div className="font-Roboto font-bold text-primary300 text-xl text-center w-11/12 m-auto">Este grupo no tiene ningún integrante</div>
                <div className="flex justify-center text-primary200 m-3"><InboxRounded style={{fontSize:"500%"}}/></div>
            </div>
        </div>
    )
}

export default CardSinTurno
