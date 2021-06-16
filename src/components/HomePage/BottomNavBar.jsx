import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { House,Agenda,Noti,configuracion } from '../../Assets/Icons';

const BottomNavBar = () => {
    return (
        <div className="absolute bottom-0 w-full">
            <BottomNavigation value={"Home"}>
                <BottomNavigationAction value="Home" icon={House} />
                <BottomNavigationAction value="Agenda" icon={Agenda} />
                <BottomNavigationAction value="Notificaciones" icon={Noti} />
                <BottomNavigationAction value="Configuracion" icon={configuracion} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNavBar
