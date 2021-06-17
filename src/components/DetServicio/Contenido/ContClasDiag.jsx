import React from 'react'
import Button from '../Button'
import GeneralButton from '../GeneralButton'
import ButtonEdit from '../ButtonEdit'

const ContClasDiag = () =>{
    return(
        <div>
            <div className=" mt-5">
                <GeneralButton 
                    Titulo="Clasificacion CIE-1O"
                    Contenido="XIX. Traumaticos, envenenamientos y algunas otras consecuencias de causas esternas(S00-T98)"
                />
            </div>
            <Button
               Titulo="Agregar CIE-10"
            />
            <ButtonEdit/>
        </div>
    )
}

export default ContClasDiag