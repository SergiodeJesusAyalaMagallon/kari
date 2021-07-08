import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Footer2Botn = ({Ruta,Ruta2}) => {
    return (
        <div>
            <div className="bg-onPrimary pt-10 pb-10 font-Roboto font-medium text-center">
                <Link
                    component = {RouterLink}
                    to = {Ruta}
                >   
                    <div className="bg-primary600 w-7/12 lg:w-3/12 m-auto rounded-xl text-onPrimary py-2">Crear servicio</div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = {Ruta2}
                >   
                    <div className="border-2 border-primary600 w-7/12 lg:w-3/12 m-auto rounded-xl text-primary600 mt-5 py-2">Cancelar</div>
                </Link>
            </div>
        </div>
    )
}

export default Footer2Botn
