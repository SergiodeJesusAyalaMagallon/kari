import { Tune } from '@material-ui/icons'
import React from 'react'

const HeaderGTT = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-3/4 m-auto">
                <div className="w-1/2 m-auto mt-10 flex justify-center text-primary200"><Tune style={{fontSize:"500%"}}/></div>
                <div className="w-11/12 text-center m-auto mt-2 text-3xl text-primary500 font-Roboto font-bold">Gestión de turnos de trabajo</div>
                <div className="w-10/12 text-center m-auto mt-4 mb-10 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
            </div>
        </div>
    )
}

export default HeaderGTT
