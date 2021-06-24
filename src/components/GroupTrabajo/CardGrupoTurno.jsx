import React from 'react'

const CardGrupoTurno = ({Titulo,Content,Edo,Color}) => {
    return(
        <div className="grid bg-onPrimary w-10/12 m-auto rounded-2xl" id={Color}>
            <div className="bg-primary700 text-primary200 grid grid-cols-12 rounded-t-2xl">
                <div className="text-xl font-Sans font-extrabold my-4 ml-6 col-span-9 text-center">{Titulo}</div>
                <div className="col-span-3 flex flex-wrap justify-center items-center -ml-5 mr-2">{Edo}</div>
            </div>
            <Content/>
        </div>

    )
}

export default CardGrupoTurno