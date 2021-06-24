import React from 'react'
import { AmbulanceDer } from '../../Assets/Icons'

const Headerxl = () => {
    return (
        <div className="w-full bg-primary900 flex justify-center">
            <div className="w-3/4 m-auto">
                <div className="w-1/2 m-auto mt-14 flex justify-center">{AmbulanceDer}</div>
                <div className="w-11/12 text-center m-auto mt-5 text-3xl text-onPrimary font-Roboto font-bold">Reporte de Servicio</div>
                <div className="w-10/12 text-center m-auto mt-5 mb-32 text-base text-primary300 font-Sans font-normal">Cuerpo de Protección Civil Sahuayo Michoacán</div>
            </div>
        </div>
    )
}

export default Headerxl
