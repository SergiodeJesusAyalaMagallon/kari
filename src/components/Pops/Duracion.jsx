import React from 'react'
import ContDuracion from './ContDuracion'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'

const Duracion = ({onClick,titulo}) => {
    return (
        <div>
            <PopGeneral
            Header={<HeaderBasic Titulo={titulo}/>}
            Content={ContDuracion}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Aceptar" onClick={onClick} />}
          />
        </div>
    )
}

export default Duracion
