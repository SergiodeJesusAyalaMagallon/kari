import React from 'react'

const GeneralButton = ({Titulo,Contenido}) =>{
    return(
        <div className="bg-background m-auto w-11/12 rounded-2xl mb-7">
            <div className="pl-3 py-2">
                <div className="text-base text-primary200 font-Sans font-extrabold tracking-wide">{Titulo}</div>
                <div className="text-primary400 text-base font-Sa font-lg  font-extrabold -mt-1">{Contenido}</div>
            </div>
        </div>
    )
}

export default GeneralButton