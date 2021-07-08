import { Edit } from '@material-ui/icons'
import React from 'react'
import ButtonIT from '../Compartidos/ButtonIT'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
const CardEspDatos = () => {
    return (
        <div className="grid bg-surface w-10/12 lg:w-5/12 m-auto rounded-2xl">
            <div className="bg-primary700 text-primary200  rounded-t-2xl">
                <div className="text-xl font-Sans font-extrabold text-center my-4">Observaciones y diagnóstico</div>
            </div>
            <div className="bg-background w-11/12 m-auto rounded-xl my-7 px-2 py-4 font-Roboto font-medium text-base text-primary400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            </div>
            <Link
                    component = {RouterLink}
                    to = "/Diagnostico"
                >  
                <ButtonIT Icono={Edit} Texto="Editar"/> 
            </Link>
            
        </div>
    )
}

export default CardEspDatos
