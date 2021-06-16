import React from 'react'
import Header from '../components/HomePage/Header'
import Busqueda from '../components/HomePage/Busqueda'
import NotificationButton from '../components/HomePage/NotificationButton'
import ChipGroup from '../components/HomePage/ChipGroup'
import CardGroup from '../components/HomePage/CardGroup'
import BottomNavBar from '../components/HomePage/BottomNavBar'

const HomePage = () => {
    return (
    <div className="w-full h-full bg-background">
        <Header/>
        <div className="-mt-5 ml-8 grid grid-cols-12 w-12/12">
            <div className="col-span-9  w-11/12 h-10">
                <Busqueda/>
            </div>
            <div className="col-span-3 w-9/12 h-10 mx-2">
                <NotificationButton/>
            </div>
        </div>
        <div className="mt-4 ml-5 ">
            <ChipGroup/>
        </div>
        <div className="mt-5">
            <CardGroup/>
        </div>
        <div>
            <BottomNavBar/>
        </div>
    </div>
)
}

export default HomePage

