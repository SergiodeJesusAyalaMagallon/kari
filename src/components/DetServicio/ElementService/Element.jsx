import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const Element = ({Nombre,Avata}) => {
    return (
        <div className="bg-primary200 m-auto w-10/12 rounded-2xl mt-10 grid grid-cols-12">
            <div className="col-span-10 mx-4 my-2">
                <div className="text-onPrimary text-base font-Roboto font-medium -mt-1">{Nombre}</div>
            </div>
            <div className="flex justify-center items-center -mt-7">
                <Avatar>{Avata}</Avatar>
            </div>
        </div>
    )
}

export default Element
