import { Modal } from '@material-ui/core';
import { PersonAddRounded } from '@material-ui/icons'
import React from 'react'
import AddMiemExi from './AddMiemExi';
import NuevMiem from './NuevMiem';

const MiemExis = ({onClick}) => {
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

    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <AddMiemExi onClick={handleClose2}/>
    );
    return (
        <div className="w-10/12 md:w-10/12 lg:w-7/12 m-auto mt-48 rounded-2xl bg-onPrimary" id="Background">
            <div className="py-6 bg-primary700 rounded-2xl rounded-br-none font-Roboto font-bold text-xl text-primary200 flex flex-wrap justify-center items-center">
                <div className="w-8/12 m-auto text-center">Agregar paramédicos para el turno 1</div>
            </div>
            <div className="py-6">
            <button type="button" onClick={handleOpen} className="w-full">
            <div className="bg-secondary500 w-10/12 m-auto rounded-2xl mb-6 text-onPrimary flex justify-center">
                        <div className="font-Roboto font-medium text-base py-3"><PersonAddRounded/> Miembro nuevo </div>
                    </div>
            </button>
            <Modal
                open={open}
            >
            {body}
            </Modal>

            <button type="button" onClick={handleOpen2} className="w-full">
            <div className="bg-secondary300 w-10/12 m-auto rounded-2xl text-onPrimary flex justify-center">
                        <div className="font-Roboto font-medium text-base py-3">Seleccionar de los existentes </div>
                    </div>
            </button>
            <Modal
                open={open2}
            >
            {body2}
            </Modal>
                    
                    
            </div>
            <div className="bg-background rounded-b-2xl flex flex-wrap justify-center items-center py-6">
                <div className="border-2 border-primary500 w-5/12 m-auto rounded-2xl text-primary500 flex justify-center">
                    <div className="font-Roboto font-medium text-base py-2" onClick={onClick}>Cancelar</div>
                </div>
            </div>
        </div>
    )
}

export default MiemExis
