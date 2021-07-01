import React from 'react'
import GeneralButton from '../GeneralButton'
import ButtonIT from '../../Compartidos/ButtonIT'
import { Edit } from '@material-ui/icons'


const ContClasDiag = () =>{
    return(
        <div>
            <div className=" mt-5">
                <GeneralButton 
                    Titulo="Clasificacion CIE-1O"
                    Contenido="XIX. Traumaticos, envenenamientos y algunas otras consecuencias de causas esternas(S00-T98)"
                />
            </div>
                <ButtonIT Icono={Edit} Texto="Editar"/> 
        </div>
    )
}

export default ContClasDiag