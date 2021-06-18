import React from 'react'
import {  PersonAddRounded } from '@material-ui/icons'

const ButtonAgregar = () => {
    return (
        <div className="bg-secondary300 w-10/12 m-auto rounded-xl mb-6 text-onPrimary flex justify-center">
            <div className="font-Roboto font-medium text-base py-3"><PersonAddRounded/> Agregar Miembros</div>
        </div>
    )
}

export default ButtonAgregar