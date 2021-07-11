import React from 'react'
import {AmbulenceDerPriLg } from '../Assets/Icons'
import Footer2Botn from '../components/Compartidos/Footer2Botn'

const ConfService = () => {
    return (
        <div>
            <div className="text-primary600 font-Roboto font-bold text-2xl w-8/12 m-auto text-center pt-32">¿Estás seguro de crear este servicio?</div>
            <div className="flex justify-center mt-10">{AmbulenceDerPriLg}</div>
            <div className="text-primary500 font-Roboto font-medium text-4xl w-8/12 m-auto text-center mt-6">Servicio de emergencia</div>
            <div className="text-onBackground font-Sans font-semibold text-lg text-center mt-4 mb-36">Solicitado por Población abierta</div>

            <Footer2Botn Ruta="/ReadyService" Ruta2="/home"/>

        </div>
    )
}

export default ConfService
