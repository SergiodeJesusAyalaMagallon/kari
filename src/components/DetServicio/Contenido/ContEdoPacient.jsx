import React from 'react'
import GeneralButton from '../GeneralButton'
import ButtonEdit from '../ButtonEdit'
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
                <ButtonEdit/>
            </div>
    )
}

export default ContEdoPacient