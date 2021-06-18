import React from 'react'

const CardGrupoTurno = ({Titulo,Content,Color,Edo}) => {
    return(
        <div className="grid bg-onPrimary w-10/12 m-auto rounded-2xl">
            <div className="bg-primary700 text-primary200 grid grid-cols-12 rounded-t-2xl">
                <div className="text-xl font-Sans font-extrabold my-4 ml-6 col-span-10">{Titulo}</div>
                <div className="text-primary300 flex flex-wrap justify-center items-center" id={Color}>{Edo}</div>
            </div>
            <Content/>
        </div>

    )
}

export default CardGrupoTurno