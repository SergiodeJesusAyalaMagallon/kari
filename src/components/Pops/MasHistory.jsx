import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { AddCircleRounded, DescriptionRounded } from '@material-ui/icons'

const MasHistory = ({onClick}) => {
    return (
        <div>
            <div className="bg-background w-8/12 m-auto rounded-3xl py-8 mt-96">
            
            <div className="bg-primary300 w-10/12 m-auto rounded-full mb-6 text-onPrimary flex justify-center">
                <div className="font-Roboto font-medium text-base py-3"><AddCircleRounded/> Nuevo servicio </div>
            </div>
            
            <Link
                    component = {RouterLink}
                    to = "/Informes"
                >   
                    <div className="bg-primary300 w-10/12 m-auto rounded-full text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-3"><DescriptionRounded/> Buscar informes </div>
                </div>
                </Link>

            </div>
            <div className="text-secondary500 mt-6 m-auto w-2/12 transform rotate-45" onClick={onClick}>
                <AddCircleRounded style={{fontSize:"450%"}}/>
            </div>
        </div>
    )
}

export default MasHistory
