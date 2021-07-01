import React from 'react'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'
import AjustesUsuario from './AjustesUsuario'
import { Modal } from '@material-ui/core'

const AgCorCod = ({onClick,texto1,tit,place}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <AjustesUsuario onClick={handleClose}/>
    );

    return (
        <div className="mt-36">
            <PopGeneral 
            Header={<HeaderBasic Titulo="Agregar un miembro nuevo al grupo"/>}
            Content={
                <div>
                    <div className="text-onBackground text-lg font-Roboto font-bold tracking-tight w-11/12 m-auto text-center pb-5">{tit}</div>
                    <div>
                    <div className="w-10/12 m-auto">
                        <div className="bg-primary300 rounded-t-lg w-10/12 pl-4 py-1 font-Sans font-bold text-base text-onPrimary">{texto1}</div>
                        <input className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full " type="text" placeholder={place}/>
                    </div>
                    </div>
                </div>
            }
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Agregar" onClick={onClick} onClick2={handleOpen}/>}
            Ancho="An8-12"
            Id="Background"
          />
          <Modal
                open={open}
            >
            {body}
            </Modal>
        </div>
    )
}

export default AgCorCod
