import React from 'react'
import GeneralButton from '../GeneralButton'
import CardAlteraciones from './CardAlteraciones'
import ButtonIT from '../../Compartidos/ButtonIT'
import { Edit } from '@material-ui/icons'

const ContLesiones = () => {
    return (
        <div>
            <div className="mt-3 ml-2">
                <GeneralButton 
                    Titulo="Causa de la urgencia"
                    Contenido="Traumática"
                />
                <GeneralButton 
                    Titulo="Mecanismo de lesión"
                    Contenido="Sin capturar"
                />
                <GeneralButton 
                    Titulo="Otras lesiones"
                    Contenido="No aplica"
                />
                <GeneralButton 
                    Titulo="Enfermedad"
                    Contenido="No aplica"
                />
                <GeneralButton 
                    Titulo="Activación de código"
                    Contenido="Sin capturar"
                />
                <GeneralButton 
                    Titulo="Triage"
                    Contenido="Amarillo: grave y estable"
                />
            </div>
            <CardAlteraciones/>
            <ButtonIT Icono={Edit} Texto="Editar"/>
        </div>
    )
}

export default ContLesiones
