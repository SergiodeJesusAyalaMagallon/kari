import React from 'react'
import GeneralButton from '../GeneralButton'
import ButtonIT from '../../Compartidos/ButtonIT'
import { Edit } from '@material-ui/icons'

const ContPaciente = () => {
    return (
        <div>
            <div className=" w-11/12 grid grid-cols-12 m-auto py-3">
                <div className="bg-onPrimary col-span-9 my-2 py-2 pl-4 rounded-l-lg ml-2">
                    <div className="text-primary200 font-Sans font-extrabold text-base">Nombre</div>
                    <div className="text-primary400 font-Roboto font-medium text-base -mt-1">Oliver Valdez Fernandez</div>
                </div>
                <div  className="bg-onPrimary col-span-3 ml-3 my-2 p-2 rounded-r-lg text-center">
                    <div className="text-primary200 font-Sans font-extrabold text-base">Edad</div>
                    <div className="text-primary400 font-Roboto font-medium text-base -mt-1">34</div>
                </div>    
            </div>

            <div className="w-11/12 grid grid-cols-12 m-auto -mt-3">
                <div  className="bg-background col-span-4 ml-2 pl-2 py-2 my-2 rounded-l-lg">
                    <div className="text-primary200 font-Sans font-extrabold text-base">Sexo</div>
                    <div className="text-primary400 font-Roboto font-medium text-base -mt-1">Masculino</div>
                </div>  
                <div className="bg-background col-span-8 ml-3 my-2 pl-2 py-2 rounded-r-lg">
                    <div className="text-primary200 font-Sans font-extrabold text-base">Derechohabiencia</div>
                    <div className="text-primary400 font-Roboto font-medium text-base -mt-1">Sin seguro</div>
                </div>             
            </div>
            <div className="mt-3 ml-2">
                <GeneralButton 
                    Titulo="Motivo de la solicitud"
                    Contenido="Agresión física sin armas"
                />
                <GeneralButton 
                    Titulo="Origen del paciente"
                    Contenido="Escuela o centro educativo"
                />
                <GeneralButton 
                    Titulo="Municipio de origen"
                    Contenido="Sahuayo"
                />
                <GeneralButton 
                    Titulo="Destino del paciente"
                    Contenido="Sin capturar"
                />
                <GeneralButton 
                    Titulo="Municipio destino"
                    Contenido="Sin capturar"
                />
            </div>
            <ButtonIT Icono={Edit} Texto="Editar"/>
        </div>
    )
}

export default ContPaciente
