import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Header from '../components/HomePage/Header'
import Busqueda from '../components/Compartidos/Busqueda'
import NotificationButton from '../components/HomePage/NotificationButton'
import CardGroup from '../components/HomePage/CardGroup'
import BottomNavBar from '../components/HomePage/BottomNavBar'
import { AddCircleRounded } from '@material-ui/icons'
import AddServices from '../components/Pops/AddServices'
import { Modal } from '@material-ui/core'


const HomePage = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <AddServices onClick={handleClose}/>
    );

    return (
    <div>
        <Header/>
        <div className="-mt-5 ml-8 grid grid-cols-12 w-12/12">
            <div className="col-span-9  w-11/12 h-10">
                <Link
                    component = {RouterLink}
                    to = "/Search"
                    color = "inherit"
                    aria-label = "menu"
                >   
                    <Busqueda Color="Primary200"/>
                </Link>
            </div>
            <div className="col-span-3 w-9/12 h-10 mr-2">
            <Link
                    component = {RouterLink}
                    to = "/Noti"
                    color = "inherit"
                    aria-label = "menu"
                >   
                <div className="text-secondary">
                <span class="absolute px-2 py-1 text-xs font-bold text-secondary700 bg-onPrimary rounded-full -mt-3 right-6">3</span>
                <NotificationButton/>
                </div>
                    
                </Link>
            </div>
        </div>
        <div className="overflow-y-scroll mt-6" style={{height:"560px"}}>
            <CardGroup/>
        </div>
        <BottomNavBar variante1="NavSelected"/>
        <div className="absolute bottom-14 w-full flex justify-end pr-3">
        <button type="button" onClick={handleOpen} className="w-6/12"><div className=" grid grid-cols-12 rounded-full bg-secondary500 text-onPrimary py-2"><div className="col-span-4 flex justify-center"><AddCircleRounded/></div><div className="col-span-8 font-Roboto font-bold text-left ">Nuevo servicio</div></div></button>
            <Modal
                open={open}
            >
            {body}
            </Modal>
            
        </div>
    </div>
)
}

export default HomePage

