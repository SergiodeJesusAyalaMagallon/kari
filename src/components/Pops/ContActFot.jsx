import { Avatar } from '@material-ui/core'
import React from 'react'
import Button from '../DetServicio/Button'
import ButtonBorder from './ButtonBorder'
import Modal from '@material-ui/core/Modal';
import ElimFoto from './PopElimFoto'
import { UseUser } from '../../Context/UserContext'
import { Skeleton } from '@material-ui/lab';

const ContActFot = () => {
    const {user, loadUser} = UseUser();
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
            {
                loadUser
                ? <Skeleton variant="circle"/>
                : (
                    user.picture
                    ? <Avatar src={user.picture}/>
                    : <Avatar>{user.name.charAt(0)} </Avatar>
                )
            }
            </div>
            <Button Titulo="Subir foto"/>
            <button type="button" onClick={handleOpen} className="w-full lg:w-8/12 lg:ml-16">
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
