import { Modal } from '@material-ui/core';
import { AlternateEmailRounded, VpnKeyRounded } from '@material-ui/icons'
import React from 'react'
import AgCorCod from './AgCorCod';

const NuevMiem = ({onClick}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <AgCorCod onClick={handleClose} 
        tit="Escribe el correo electrónico con el que se registró la otra persona" 
        texto1="Correo electrónico" 
        place="Ej. mymail@gmail.com"/>
    );

    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <AgCorCod onClick={handleClose2}
        tit="Escribe el código mostrado en la pantalla de la otra persona" 
        texto1="Código de activación" 
        place="Ej. A34JKR9"/>
    );
    return (
        <div>
            <div className="w-10/12 md:w-10/12 lg:w-3/12 m-auto mt-48 rounded-2xl bg-onPrimary" id="Background">
            <div className="py-6 bg-primary700 rounded-2xl rounded-br-none font-Roboto font-bold text-xl text-primary200 flex flex-wrap justify-center items-center">
                <div className="w-8/12 m-auto text-center">Agregar un miembro nuevo al grupo</div>
            </div>
            <div className="py-6">
            <button type="button" onClick={handleOpen} className="w-full">
            
            <div className="bg-primary300 w-10/12 m-auto rounded-full mb-6 text-onPrimary flex justify-center">
                        <div className="font-Roboto font-medium text-base py-3"><AlternateEmailRounded/> Con correo electrónico</div>
                    </div>
            </button>
            <Modal
                open={open}
            >
            {body}
            </Modal>
            <button type="button" onClick={handleOpen2} className="w-full">
            <div className="bg-primary300 w-10/12 m-auto rounded-full text-onPrimary flex justify-center">
                        <div className="font-Roboto font-medium text-base py-3"><VpnKeyRounded/> Con código de activación </div>
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
        </div>
    )
}

export default NuevMiem
