import React from 'react'

const ButtonIT = ({Icono,Texto}) => {
    return (
        <div className="bg-secondary300 w-10/12 m-auto rounded-xl mb-6 text-onPrimary flex justify-center">
            <div className="font-Roboto font-medium text-base py-3"><Icono/> {Texto} </div>
        </div>
    )
}

export default ButtonIT
