import React from 'react'
import ContHourEntrada from './ContHourEntrada'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopHour from './PopHour'

const Hour = ({onClick,titulo}) => {
    return (
        <div className="mt-32">
            <PopHour
            Header={<HeaderBasic Titulo={titulo}/>}
            Content={ContHourEntrada}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Aceptar" onClick={onClick} />}
            
            />
        </div>
    )
}

export default Hour
