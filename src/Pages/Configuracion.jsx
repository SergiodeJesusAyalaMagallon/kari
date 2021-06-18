import React from 'react'
import BaseCard from '../components/Configuracion/BaseCard'
import CarITF from '../components/Configuracion/CarITF'
import ContApli from '../components/Configuracion/ContApli'
import ContCuenta from '../components/Configuracion/ContCuenta'
import ButtonV2 from '../components/DetServicio/Button'
const Configuracion = () => {
    return (
        <div>
            <div className="rounded-bl-3xl bg-primary700 font-Roboto font-medium text-2xl text-onPrimary h-24 flex flex-wrap items-center justify-center">
                <div className="pt-8">
                    Configuración
                </div>
            </div>
            <div className="mt-10"> 
                <BaseCard Context={CarITF}/>
            </div>
            <div className="text-sm text-onBackground font-Roboto font-medium w-10/12 m-auto mt-10">APLICACIÓN</div>
            <div className="mt-1"> 
                <BaseCard Context={ContApli}/>
            </div>
            <div className="text-sm text-onBackground font-Roboto font-medium w-10/12 m-auto mt-10">CUENTA</div>
            <div className="mt-1"> 
                <BaseCard Context={ContCuenta}/>
            </div>
            <div className="mt-10 pb-16">
                <ButtonV2 Titulo="Cerrar la sesión"/>
            </div>
        </div>
    )
}

export default Configuracion
