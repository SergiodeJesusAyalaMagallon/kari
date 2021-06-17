import React from 'react'

const Card = ({titulo,matricula,boton,icon,porcentaje}) => {
    return (
        <div className="w-11/12 h-37 m-auto mb-6 rounded-2xl  bg-surface grid grid-cols-12">
            <div className="w-11/12 bg-primary700 col-span-4 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                <div className="w-11/12 text-surface mx-5 mt-6 flex justify-end mb-2" >
                    {icon}
                </div>
                <div className="font-Sans font-extrabold text-xl tracking-tighter text-primary400 flex justify-center">
                    {matricula}
                </div>
            </div>
            <div className="col-span-6 mt-3">
                <div className="m-auto w-8/12 text-primary600 font-Sans font-bold text-lg text-left leading-tight tracking-wider mb-2">
                    {titulo}
                </div>
                <div className=" flex mx-6 -space-x-1 overflow-hidden">
                    <img class="inline-block h-8 w-8 rounded-full " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-8 w-8 rounded-full " src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img class="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <div>
                    <div className="flex flex-wrap content-center justify-center w-7/12 rounded-lg mx-7 mt-6 mb-4 bg-primary200 text-primary800 font-Roboto font-bold text-base">{boton}</div>
                </div>
            </div>
            <div className="w-11/12 m-4 bg-background h-5/6 my-auto rounded-full flex items-end justify-center">
                <div className="bg-primary200 w-10/12 h-3/4 rounded-full m-0.5 text-onPrimary font-Sans font-extrabold text-sm">
                    <div className=" my-12 transform -rotate-90 tracking-widest">
                        {porcentaje}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
