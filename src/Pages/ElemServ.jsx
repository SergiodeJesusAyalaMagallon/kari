import React from 'react'
import { AmbulenceDerPrimd } from '../Assets/Icons'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import ButtonITRounded from '../components/Compartidos/ButtonITRounded'
import { AddCircleRounded, DeleteRounded, EditRounded } from '@material-ui/icons'
import { Avatar, Modal } from '@material-ui/core'
import PopEliminarMiembro from '../components/Pops/PopEliminarMiembro'
import SelectorMiembros from '../components/Pops/SelectorMiembros'

const ElemServ = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <PopEliminarMiembro onClick={handleClose}/>
    );

    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <SelectorMiembros onClick={handleClose2} Header="¿Quién es el chofer en este servicio?" btn2="Aceptar" />
    );

    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };
    
    const handleClose3 = () => {
        setOpen3(false);
    };

    const body3 = (
        <SelectorMiembros onClick={handleClose3} Header="¿Quién es el jefe de este servicio?" btn2="Aceptar" />
    );
    
    const [open4, setOpen4] = React.useState(false);

    const handleOpen4 = () => {
        setOpen4(true);
    };
    
    const handleClose4 = () => {
        setOpen4(false);
    };

    const body4 = (
        <SelectorMiembros onClick={handleClose4} Header="Selecciona los paramédicos a agregar" btn2="Agregar" />
    );
    return (
        <div>
            <div className="h-screen overflow-scroll">
            <div className="flex justify-center pt-16">{AmbulenceDerPrimd}</div>
            <div className="text-primary500 font-Roboto font-bold text-3xl w-10/12 m-auto text-center mt-6">Elementos del Servicio de emergencia</div>
            <div className="text-primary300 font-Sans w-7/12 m-auto text-center mt-2">Cuerpo de Protección Civil Sahuayo Michoacán</div>
            
            <div className="grid grid-cols-12 mt-10">
                <div className="col-span-10 bg-onPrimary rounded-r-xl mr-4 py-2 grid grid-cols-12">
                    <div className="grid grid-cols-1 pl-6 col-span-9">
                        <div className="text-primary200 font-extrabold">Chofer:</div>
                        <div className="text-primary400 font-Roboto font-medium">Andrea Gómez Rossainz</div>
                    </div>
                    <div className="col-span-3 flex flex-wrap justify-center items-center"><Avatar>A</Avatar></div>
                </div>
                <button type="button" onClick={handleOpen2} className="w-full col-span-2"><div className="bg-secondary300 rounded-l-xl col-span-2 flex flex-wrap justify-center items-center text-onPrimary py-3"><EditRounded/></div></button>
                <Modal
                    open={open2}
                >
                {body2}
                </Modal>
            </div>

            <div className="grid grid-cols-12 mt-10">
                <div className="col-span-10 bg-onPrimary rounded-r-xl mr-4 py-2 grid grid-cols-12">
                    <div className="grid grid-cols-1 pl-6 col-span-9">
                        <div className="text-primary200 font-extrabold">Jefe de servicio</div>
                        <div className="text-primary400 font-Roboto font-medium">Juan Javier Rubio</div>
                    </div>
                    <div className="col-span-3 flex flex-wrap justify-center items-center"><Avatar>J</Avatar></div>
                </div>
                <button type="button" onClick={handleOpen3} className="w-full col-span-2"><div className="bg-secondary300 rounded-l-xl col-span-2 flex flex-wrap justify-center items-center text-onPrimary py-3"><EditRounded/></div></button>
                <Modal
                    open={open3}
                >
                {body3}
                </Modal>
                
            </div>
            <div className="w-7/12 m-auto text-onPrimary mt-10">
            <button type="button" onClick={handleOpen4} className="w-full"><ButtonITRounded Icono={AddCircleRounded} Texto="Agregar parmédicos"/></button>
            <Modal
                open={open4}
            >
            {body4}
            </Modal>
            </div>

            <div className="pb-40">
            <div className="grid grid-cols-12 mt-10">
                <div className="col-span-10 bg-primary300 rounded-r-xl mr-4 py-2 grid grid-cols-12">
                    <div className="grid grid-cols-1 pl-6 col-span-9 py-2">
                        <div className="text-onPrimary font-Roboto font-medium">Karen Herminia Pizarro</div>
                    </div>
                    <div className="col-span-3 flex flex-wrap justify-center items-center -mt-14"><Avatar>K</Avatar></div>
                </div>
                <button type="button" onClick={handleOpen} className="w-full col-span-2 my-2"><div className="bg-secondary300 rounded-l-xl flex flex-wrap justify-center items-center text-onPrimary py-3"><DeleteRounded/></div></button>
                <Modal
                    open={open}
                >
                {body}
                </Modal>

                
            </div>

            <div className="grid grid-cols-12 mt-10 ">
                <div className="col-span-10 bg-primary300 rounded-r-xl mr-4 py-2 grid grid-cols-12">
                    <div className="grid grid-cols-1 pl-6 col-span-9 py-2">
                        <div className="text-onPrimary font-Roboto font-medium">Alvaro Prieto Rodriguez</div>
                    </div>
                    <div className="col-span-3 flex flex-wrap justify-center items-center -mt-14"><Avatar>A</Avatar></div>
                </div>
                <button type="button" onClick={handleOpen} className="w-full col-span-2 my-2"><div className="bg-secondary300 rounded-l-xl flex flex-wrap justify-center items-center text-onPrimary py-3"><DeleteRounded/></div></button>
                <Modal
                    open={open}
                >
                {body}
                </Modal>
                
            </div>
            </div>
            
            </div>
            
            <div className="absolute bg-surface pt-5 pb-8 font-Roboto font-medium text-center  bottom-0 w-full">
                <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >   
                    <div className="bg-primary600 w-7/12 m-auto rounded-xl text-onPrimary py-1.5">Guardar elementos</div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/"
                >   
                    <div className="border-2 border-primary600 w-7/12 m-auto rounded-xl text-primary600 mt-3 py-1.5">Cancelar</div>
                </Link>
            </div>
        </div>
    )
}

export default ElemServ
