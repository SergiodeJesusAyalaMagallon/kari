import React from 'react'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'

const SelectorBox = ({content,onClick,titulo}) => {
    return (
        <div>
            <PopGeneral 
            Header={<HeaderBasic Titulo={titulo}/>}
            Content={
            <div>
                {content}
            </div>
        }
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Aceptar" onClick={onClick}/>}
          />
        </div>
    )
}

export default SelectorBox
