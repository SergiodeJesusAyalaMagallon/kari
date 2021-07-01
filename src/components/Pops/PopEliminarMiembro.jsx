import { Avatar } from '@material-ui/core'
import React from 'react'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'

const PopEliminarMiembro = ({onClick}) => {
    return (
        <div className="mt-36">
            <PopGeneral 
            Header={<HeaderBasic Titulo="¿Deseas eliminar a Karen de ese servicio?"/>}
            Content={
            <div className="flex flex-wrap justify-center items-center -mt-8">
                <Avatar style={{width:"35%",paddingTop:"15%",paddingBottom:"15%",fontSize:"300%"}}>j</Avatar>
            </div>}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Eliminar" onClick={onClick}/>}
            Id="Background"
            Ancho="An8-12"
          />
        </div>
    )
}

export default PopEliminarMiembro
