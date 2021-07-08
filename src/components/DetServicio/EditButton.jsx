import React from 'react'
import { CreateRounded } from '@material-ui/icons'

const EditButton = ({Titulo,Nombre}) => {
    return (
        <div className="bg-secondary300 m-auto w-10/12 lg:w-5/12 rounded-2xl mt-7 grid grid-cols-12">
            <div className="col-span-10 mx-4 my-2">
                <div className="text-base text-onPrimary font-Sans font-extrabold tracking-wide text-left">{Titulo}</div>
                <div className="text-secondary800 text-xl font-Sans font-lg  font-bold -mt-1 text-left">{Nombre}</div>
            </div>
            <div className="flex justify-center items-center text-secondary800">
                <CreateRounded/>
            </div>
        </div>
    )
}

export default EditButton
