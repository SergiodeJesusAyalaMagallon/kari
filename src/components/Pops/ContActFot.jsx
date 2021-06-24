import { Avatar } from '@material-ui/core'
import React from 'react'
import Button from '../DetServicio/Button'
import ButtonBorder from './ButtonBorder'
import Modal from '@material-ui/core/Modal';
import ElimFoto from './PopElimFoto'

const ContActFot = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <ElimFoto onClick={handleClose}/>
    );

    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
                <Avatar style={{width:"65%",paddingTop:"30%",paddingBottom:"30%",fontSize:"500%"}}>j</Avatar>
            </div>
            <Button Titulo="Subir foto"/>
            <button type="button" onClick={handleOpen} className="w-full">
            <ButtonBorder Titulo="Borrar foto de perfil"/></button>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>
        </div>
    )
}

export default ContActFot
