import React from 'react'
import ContElimTurno from './ContElimTurno'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'

const PopEliminarTurno = ({onClick}) => {
    return (
        <div>
            <PopGeneral 
            Header={<HeaderBasic Titulo="¿Deseas eliminar el turno 1?"/>}
            Content={<ContElimTurno/>}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Eliminar" onClick={onClick}/>}
            Id="Background"
          />
        </div>
    )
}

export default PopEliminarTurno
