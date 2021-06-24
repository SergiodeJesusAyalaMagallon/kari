import React from 'react'
import ContDetTurnoEsp from '../GestionTTrabajo/ContDetTurnoEsp'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'

const PopAgrTurno = ({onClick}) => {
    return (
        <div>
            <PopGeneral
            Header={<HeaderBasic Titulo="Agregar un nuevo turno (Turno 4)"/>}
            Content={ContDetTurnoEsp}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Crear" onClick={onClick}/>}
            Id="Background"
          />
        </div>
    )
}

export default PopAgrTurno
