import React from 'react'
import {  CreateRounded } from '@material-ui/icons'
const ButtonEdit = () => {
    return (
        <div className="bg-secondary300 w-10/12 m-auto rounded-xl mb-6 text-onPrimary flex justify-center">
            <div className="font-Roboto font-medium text-base py-3"><CreateRounded/> Editar</div>
        </div>
    )
}

export default ButtonEdit
