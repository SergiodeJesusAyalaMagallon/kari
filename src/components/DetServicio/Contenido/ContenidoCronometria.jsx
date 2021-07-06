import { Edit } from '@material-ui/icons'
import React from 'react'
import ButtonIT from '../../Compartidos/ButtonIT'
import Button from '../Button'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { Modal } from '@material-ui/core'
import Hour from '../../Pops/Hour'

const ContenidoCronometria = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <Hour onClick={handleClose} titulo="Hora de llegada al hospital"/>
    );
    return (
        <div>
            <div className="mt-10">
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:02</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Hora de la llamada</div>
                </div>
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:08</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Salida de base</div>
                </div><div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:23</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Llegada al lugar</div>
                </div>
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:58</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Inicio de traslado</div>
                </div>
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary200 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200"></div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center"></div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Llegada a hospital</div>
                </div>
            </div>
            <div className="mt-5">
            <Link
                    component = {RouterLink}
                    to = "/Crono"
                >  
                <ButtonIT Icono={Edit} Texto="Editar"/> 
            </Link>
            </div>
            <button type="button" onClick={handleOpen} className="w-full">
            <Button
               Titulo="Marcar llegada a hospital"
            />
            </button>
            <Modal
                open={open}
            >
            {body}
            </Modal>
            
        </div>
    )
}

export default ContenidoCronometria
