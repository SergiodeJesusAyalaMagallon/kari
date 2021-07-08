import { AddCircleRounded, TuneRounded } from '@material-ui/icons'
import React from 'react'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { Modal } from '@material-ui/core'
import NuevMiem from './NuevMiem'

const ActionMiembros = ({onClick}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <NuevMiem onClick={handleClose}/>
    );

    return (
        <div>
            <div className="bg-background w-8/12 lg:w-3/12  m-auto rounded-3xl py-8 mt-96">
            <button type="button" onClick={handleOpen} className="w-full">
            <div className="bg-primary300 w-10/12 m-auto rounded-full mb-6 text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-3"><AddCircleRounded/> Nuevo miembro </div>
                </div>
            </button>
            <Modal
                open={open}
            >
            {body}
            </Modal>
            
            <Link
                    component = {RouterLink}
                    to = "/GTT"
                >   
                    <div className="bg-primary300 w-10/12 m-auto rounded-full text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-3"><TuneRounded/> Gestionar turnos </div>
                </div>
                </Link>

            
                
                
            </div>
            <div className="text-secondary500 mt-6 m-auto w-2/12 lg:w-1/12 lg:pl-10 transform rotate-45" onClick={onClick}>
                <AddCircleRounded style={{fontSize:"450%"}}/>
            </div>
        </div>
    )
}

export default ActionMiembros
