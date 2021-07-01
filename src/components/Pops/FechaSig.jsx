import React from 'react'
import Calendario from '../Compartidos/Calendario'
import FooterBasic from './FooterBasic'
import PopGeneral from './PopGeneral'

const FechaSig = ({onClick}) => {
    return (
        <div>
            <PopGeneral
            Header={<div className="grid grid-cols-12">
                    <div className="col-span-4 flex flex-wrap justify-end items-center w-11/12">
                        <div className="font-Sans font-extrabold text-5xl text-primay100">06</div>
                        <div className="font-Sans font-extrabold text-2xl text-primay100 -mt-2 mr-2.5">Jun</div>
                    </div>
                    <div className="col-span-8 flex flex-wrap items-center font-Sans font-extrabold text-7xl text-primary400 ml-1">2021</div>
            </div>}
            Content={<Calendario/>}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Aceptar" onClick={onClick} />}
          />
        </div>
    )
}

export default FechaSig
