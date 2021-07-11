import React from 'react'
import CardITTF from './CardITTF'
import CarITFV2 from './CarITFV2'
import Line from './Line'
import { Apple, AssignmentIndRounded } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import PopActFotPer from '../Pops/PopActFotPer'
import Pop from '../Pops/PopActNombre'

const ContCuenta = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <PopActFotPer onClick={handleClose}/>
    );
    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <Pop onClick={handleClose2}/>
    );
    return (
        <div>
            <button type="button" onClick={handleOpen} className="w-full"><CarITFV2/></button>
            <Modal
                open={open}
            >
            {body}
            </Modal>
            <Line/>
            <button type="button" onClick={handleOpen2} className="w-full">
            <CardITTF
                Icono={AssignmentIndRounded}
                Titulo="Nombre"
                Texto={window.localStorage.getItem('user')}
            />
            </button>
            <Modal
                open={open2}
            >
            {body2}
            </Modal>
            <Line/>
            <CardITTF
                Icono={AssignmentIndRounded}
                Titulo="Cuenta Google"
                Texto="Juan_rubio@gmail.com"
            />
            <Line/>
            <CardITTF
                Icono={Apple}
                Titulo="Cuenta Apple"
                Texto="Sin vincular"
            />
        </div>
    )
}

export default ContCuenta
