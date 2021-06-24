import React from 'react'
import GeneralButton from '../GeneralButton'
import ButtonIT from '../../Compartidos/ButtonIT'
import { Edit } from '@material-ui/icons'
const ContEdoPacient = () =>{
    return(
        <div className="mt-3 ml-2">
                <GeneralButton 
                    Titulo="Asistencia"
                    Contenido="No urgente"
                />
                <GeneralButton 
                    Titulo="Pulso"
                    Contenido="Sin capturar"
                />
                <GeneralButton 
                    Titulo="Tensión Arterial"
                    Contenido="120 mmHg"
                />
                <GeneralButton 
                    Titulo="Respiración"
                    Contenido="Sin capturar"
                />
                <GeneralButton 
                    Titulo="Frecuencia cardiaca"
                    Contenido="Sin capturar"
                />
                <GeneralButton 
                    Titulo="Temperatura"
                    Contenido="Amarillo: grave y estable"
                />
                <ButtonIT Icono={Edit} Texto="Editar"/>
            </div>
    )
}

export default ContEdoPacient