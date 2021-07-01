import React from 'react'
import PopGeneral from './PopGeneral';
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import ContElimFoto from './ContElimFoto';


const PopElimFoto = ({onClick}) => {
    return (
        <div className="mt-36">
            <PopGeneral 
            Header={<HeaderBasic Titulo="¿Deseas borrar tu foto de perfil?"/>}
            Content={<ContElimFoto/>}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Eliminar" onClick={onClick}/>}
            Ancho="An9-12"
          />
        </div>
    )
}

export default PopElimFoto
