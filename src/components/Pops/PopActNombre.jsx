import React from 'react'
import PopGeneral from './PopGeneral';
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import ContActNombre from './ContActNombre';

const PopActNombre = () => {
    return (
        <div>
            <PopGeneral 
            Header={<HeaderBasic Titulo="Actualiza tu nombre"/>}
            Content={ContActNombre}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Guardar"/>}
          />
        </div>
    )
}

export default PopActNombre
