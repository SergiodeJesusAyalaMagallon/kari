import React from 'react'
import PopGeneral from './PopGeneral';
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import ContElimFoto from './ContElimFoto';


const PopElimFoto = () => {
    return (
        <div>
            <PopGeneral 
            Header={<HeaderBasic Titulo="¿Deseas borrar tu foto de perfil?"/>}
            Content={ContElimFoto}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Eliminar"/>}
          />
        </div>
    )
}

export default PopElimFoto
