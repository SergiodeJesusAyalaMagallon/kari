import React from 'react'
import PopGeneral from './PopGeneral';
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import ContActFot from './ContActFot'

const PopActFotPer = ({onClick}) => {
    return (
        <PopGeneral 
            Header={<HeaderBasic Titulo="Actualizar foto de perfil"/>}
            Content={<ContActFot/>}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Guardar" onClick={onClick}/>}
          />
    )
}

export default PopActFotPer
