import { Delete, Event } from '@material-ui/icons'
import React from 'react'
import ButtonIT from '../Compartidos/ButtonIT'
import CardHTI from './CardHTI'
import Modal from '@material-ui/core/Modal';
import PopEliminarTurno from '../Pops/PopEliminarTurno'
import FechaSig from '../Pops/FechaSig';
import Hour from '../Pops/Hour';
import Duracion from '../Pops/Duracion';


const ContDetTurno = () => {
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <PopEliminarTurno onClick={handleClose}/>
    );

    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <FechaSig onClick={handleClose2}/>
    );

    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };
    
    const handleClose3 = () => {
        setOpen3(false);
    };
    const body3 = (
        <Hour onClick={handleClose3} titulo="Hora de entrada (Turno 1)"/>
    );
    
    const [open4, setOpen4] = React.useState(false);

    const handleOpen4 = () => {
        setOpen4(true);
    };
    
    const handleClose4 = () => {
        setOpen4(false);
    };
    const body4 = (
        <Duracion onClick={handleClose4} titulo="Duración de jornada"/>
    );

    const [open5, setOpen5] = React.useState(false);

    const handleOpen5 = () => {
        setOpen5(true);
    };
    
    const handleClose5 = () => {
        setOpen5(false);
    };
    const body5 = (
        <Duracion onClick={handleClose5} titulo="Duración de descanso"/>
    );

    
    return (
        <div>
            <button type="button" onClick={handleOpen2} className="w-full">
            <div className="w-10/12 m-auto mt-6">
                <div className="bg-primary300 rounded-t-lg w-10/12 pl-4 py-1 font-Sans font-bold text-base text-onPrimary text-left">Fecha de próximo turno</div>
                <div className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-5 font-Sans font-semibold text-base text-primary300 grid grid-cols-12 text-left ">
                    <div className="col-span-10">07 de junio de 2020</div>
                    <div><Event/></div>
                </div>
            </div></button>
            <Modal
                open={open2}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body2}
            </Modal>
            
            <div className="mt-10">
            <button type="button" onClick={handleOpen3} className="w-full">
            <CardHTI
                Titulo="08:00"
                tiempo="AM"
                Texto="Hora de entrada"
            />
            </button>
           
            <Modal
                open={open3}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body3}
            </Modal>

            <button type="button" onClick={handleOpen4} className="w-full">
            
            <CardHTI
                Titulo="24"
                tiempo="hora"
                Texto="Duración de jornada"
            />
            </button>
            <Modal
                open={open4}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body4}
            </Modal>

            <button type="button" onClick={handleOpen5} className="w-full">
            <CardHTI
                Titulo="48"
                tiempo="horas"
                Texto="Duración de descanso"
            />
            </button>
            <Modal
                open={open5}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body5}
            </Modal>

            </div>
            <div className="mt-7">
            <button type="button" onClick={handleOpen} className="w-full">
                <ButtonIT Icono={Delete} Texto="Eliminar turno"/></button>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>
            </div>
        </div>
    )
}

export default ContDetTurno
