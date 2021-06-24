import React from 'react'

const ButtonITRounded = ({Icono,Texto}) => {
    return (
        <div className="bg-secondary500 m-auto rounded-full mb-6 text-onPrimary flex justify-center">
            <div className="font-Roboto font-medium text-base py-3"><Icono/> {Texto} </div>
        </div>
    )
}

export default ButtonITRounded
