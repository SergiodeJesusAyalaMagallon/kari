import React from 'react'
import BaseCard from '../components/Configuracion/BaseCard'
import CarITF from '../components/Configuracion/CarITF'
import ContApli from '../components/Configuracion/ContApli'
import ContCuenta from '../components/Configuracion/ContCuenta'
import ButtonV2 from '../components/DetServicio/Button'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import BottomNavBar from '../components/HomePage/BottomNavBar'
const Configuracion = () => {
    return (
        <div>
            <div className="h-screen overflow-scroll">
            <div className="rounded-bl-3xl bg-primary700 font-Roboto font-medium text-2xl text-onPrimary h-24 lg:h-28 flex flex-wrap items-center justify-center">
                <div className="pt-8">
                    Configuración
                </div>
            </div>
            <div className="mt-10"> 
                <Link
                    component = {RouterLink}
                    to = "/workgroup"
                    color = "inherit"
                    aria-label = "workgroup"
                >   
                    <BaseCard Context={CarITF}/>
                </Link>
            </div>
            <div className="text-sm text-onBackground font-Roboto font-medium w-10/12 lg:w-7/12 m-auto mt-10">APLICACIÓN</div>
            <div className="mt-1"> 
                <BaseCard Context={ContApli}/>
            </div>
            <div className="text-sm text-onBackground font-Roboto font-medium w-10/12 lg:w-7/12 m-auto mt-10">CUENTA</div>
            <div className="mt-1"> 
                <BaseCard Context={ContCuenta}/>
            </div>
            <div className="mt-10 pb-16">
                <ButtonV2 Titulo="Cerrar la sesión"/>
            </div>
            </div>
            <BottomNavBar variante4="NavSelected"/>
        </div>
    )
}

export default Configuracion
