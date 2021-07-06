import React from 'react'
import GeneralButton from '../GeneralButton'
import ButtonIT from '../../Compartidos/ButtonIT'
import { Edit } from '@material-ui/icons'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const ContClasDiag = () =>{
    return(
        <div>
            <div className=" mt-5">
                <GeneralButton 
                    Titulo="Clasificacion CIE-1O"
                    Contenido="XIX. Traumaticos, envenenamientos y algunas otras consecuencias de causas esternas(S00-T98)"
                />
            </div>
            <Link
                component = {RouterLink}
                to = "/ClasDiagnostica"
                >  
                <ButtonIT Icono={Edit} Texto="Editar"/> 
            </Link>
        </div>
    )
}

export default ContClasDiag