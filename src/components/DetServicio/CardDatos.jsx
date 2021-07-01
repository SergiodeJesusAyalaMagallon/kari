import React from 'react'

const CardDatos = ({Titulo,Icono,Content,Color,name}) => {
    return(
        <a name={name} href>
            <div className="grid bg-surface w-10/12 m-auto rounded-2xl">
            <div className="bg-primary700 text-primary200 grid grid-cols-12 rounded-t-2xl">
                <div className="text-xl font-Sans font-extrabold my-4 ml-6 col-span-10">{Titulo}</div>
                <div className="text-secondary300 flex flex-wrap justify-center items-center" id={Color}><Icono style={{fontSize:"200%"}}/></div>
            </div>
            <Content/>
        </div>
        </a>

    )
}

export default CardDatos