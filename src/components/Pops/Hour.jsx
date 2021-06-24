import React from 'react'
import ContHourEntrada from './ContHourEntrada'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'

const Hour = ({onClick}) => {
    return (
        <div>
            <PopGeneral
            Header={<HeaderBasic Titulo="Hora de entrada (Turno 1)"/>}
            Content={ContHourEntrada }
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Aceptar" onClick={onClick} />}
          />
        </div>
    )
}

export default Hour
