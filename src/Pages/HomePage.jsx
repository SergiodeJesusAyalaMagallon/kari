import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Header from '../components/HomePage/Header'
import Busqueda from '../components/Compartidos/Busqueda'
import NotificationButton from '../components/HomePage/NotificationButton'
import ChipGroup from '../components/HomePage/ChipGroup'
import CardGroup from '../components/HomePage/CardGroup'
import BottomNavBar from '../components/HomePage/BottomNavBar'
import { AddCircleRounded } from '@material-ui/icons'

const HomePage = () => {
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
            <div className="col-span-3 w-9/12 h-10 mx-2">
            <Link
                    component = {RouterLink}
                    to = "/Noti"
                    color = "inherit"
                    aria-label = "menu"
                >   
                    <NotificationButton/>
                </Link>
            </div>
        </div>
        <div className="mt-4">
            <ChipGroup/>
        </div>
        <div className="mt-5">
            <CardGroup/>
        </div>
        <div>
            <BottomNavBar/>
        </div>
        <div className="absolute bottom-14 w-full flex justify-end pr-3">
            <div className=" grid grid-cols-12 w-6/12 rounded-full bg-secondary500 text-onPrimary py-2"><div className="col-span-4 flex justify-center"><AddCircleRounded/></div><div className="col-span-8 font-Roboto font-bold text-left ">Nuevo servicio</div></div>
        </div>
    </div>
)
}

export default HomePage

