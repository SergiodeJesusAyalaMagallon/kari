import { Edit } from '@material-ui/icons'
import React from 'react'
import ButtonIT from '../../Compartidos/ButtonIT'

const ContKilometraje = () =>{
    return(
        <div>
            <div className=" w-11/12 grid grid-cols-12 m-auto py-3">
            <div className="bg-background col-span-6 my-2 py-2 pl-4 rounded-l-lg ml-2">
              <div className="text-primary200 font-Sans font-extrabold text-base">KM inicial</div>
              <div className="text-primary400 font-Roboto font-medium text-base -mt-1">Sin capturar</div>
            </div>
           <div  className="bg-background col-span-6 ml-3 my-2 p-2 rounded-r-lg text-center">
               <div className="text-primary200 font-Sans font-extrabold text-base">KM final</div>
               <div className="text-primary400 font-Roboto font-medium text-base -mt-1">Sin capturar</div>
            </div>
               
         </div>
         <ButtonIT Icono={Edit} Texto="Editar"/>
        </div>
        
    )
}

export default ContKilometraje