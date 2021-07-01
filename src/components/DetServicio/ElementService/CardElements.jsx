import React from 'react'
import Element from './Element'
import { CheckCircleRounded, Edit } from '@material-ui/icons'
import  Avatar  from '@material-ui/core/Avatar'
import ElementJefe from './ElementJefe'
import ButtonIT from '../../Compartidos/ButtonIT'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const CardElements = () => {
    return (
        <div className="grid bg-surface w-10/12 m-auto rounded-2xl mt-32">
            <div className="bg-primary700 text-primary200 grid grid-cols-12 rounded-t-2xl">
                <div className="text-xl font-Sans font-extrabold my-4 ml-6 col-span-10">Elementos de servicio</div>
                <div className="mt-4 justify-self-end"><CheckCircleRounded style={{fontSize:"170%"}}/></div>
            </div>
            <div className="bg-background w-11/12 grid grid-cols-12 rounded-r-2xl mt-6">
                <div className="col-span-10 mx-5 my-2">
                    <div className="text-primary200 font-Sans font-extrabold text-base">Chofer:</div>
                    <div className="text-primary400 font-Roboto font-medium text-base -mt-1">Andrea Gómez Rossainz</div>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    <Avatar>A</Avatar>
                </div>
            </div>
            <div className="bg-background w-8/12 grid grid-cols-12 rounded-r-2xl mt-3 py-2">
                <div className="text-primary200 font-Sans font-extrabold text-base col-span-3 ml-5">Unidad:</div>
                <div className="text-primary400 font-Roboto font-medium text-base ml-8">032M</div>
            </div>
            <div>
                <ElementJefe
                    Nombre="Juan Javier Rubio"
                    Avata="J"
                />
            </div>
            <div>
                <Element
                    Nombre="Karen Herminia Pizarro"
                    Avata="K"
                />
                <Element
                    Nombre="Alvaro Prieto Rodríguez"
                    Avata="A"
                />
            </div>
            <div className="mt-8">
            <Link
                    component = {RouterLink}
                    to = "/ElemServ"
                >   
                <ButtonIT Icono={Edit} Texto="Editar"/>  
                </Link>
            </div>
            
        </div>
    )
}

export default CardElements
