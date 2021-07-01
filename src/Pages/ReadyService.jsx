import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import {AmbulenceDerPriLg } from '../Assets/Icons'

const ReadyService = () => {
    return (
        <div>
            <div className="flex justify-center pt-32">{AmbulenceDerPriLg}</div>
            <div className="text-primary500 font-Roboto font-medium text-4xl w-8/12 m-auto text-center mt-6">Servicio de emergencia creado</div>
            <div className="text-onBackground font-Sans font-semibold text-lg text-center mt-4 mb-36">Solicitado por Población abierta</div>

            <div className="bg-onPrimary pt-10 pb-10 font-Roboto font-medium text-center">
                <Link
                    component = {RouterLink}
                    to = "/ElemServ"
                >   
                    <div className="bg-primary600 w-7/12 m-auto rounded-xl text-onPrimary py-2">Agregar personal</div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/"
                >   
                    <div className="border-2 border-primary600 w-7/12 m-auto rounded-xl text-primary600 mt-5 py-2">Ir a los detalles</div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/"
                >   
                    <div className="border-2 border-primary600 w-7/12 m-auto rounded-xl text-primary600 mt-5 py-2">Pantalla de inicio</div>
                </Link>
            </div>
        </div>
    )
}

export default ReadyService
