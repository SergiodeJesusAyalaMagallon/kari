import React from 'react'
import {HomeRounded,HistoryRounded,NotificationsRounded,SettingsRounded} from '@material-ui/icons'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const BottomNavBar = ({variante1,variante2,variante3,variante4,Not,ID,ID2}) => {
    return (
    <div className="absolute bottom-0 w-full lg:top-0 lg:w-10 lg:h-96" id={ID}>
        <div className=" bg-onPrimary">
            <div className="grid grid-cols-4 lg:grid-cols-1 w-10/12 lg:w-full m-auto">
                <Link
                    component = {RouterLink}
                    to = "/home"
                >   
                    <div className="col-span-1 text-primary100 pt-3 lg:mt-24   pb-1 flex justify-center" id={variante1}><HomeRounded style={{fontSize:"170%"}}/></div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Historia"
                >   
                    <div className="col-span-1 text-primary100 pt-3 lg:mt-20 pb-1 flex justify-center" id={variante2}><HistoryRounded style={{fontSize:"170%"}}/></div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Noti"
                    aria-label = "menu"
                >   
                    
                    <div className="col-span-1 text-primary100 pt-3 lg:mt-20 pb-1 flex justify-center" id={variante3}><NotificationsRounded style={{fontSize:"170%"}}/></div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Config"
                >  
                    <div className="col-span-1 text-primary100 pt-3 lg:mt-20 lg:pb-12 pb-1 flex justify-center" id={variante4}><SettingsRounded style={{fontSize:"170%"}}/></div>
                </Link>
                
            </div>
        </div>
    </div>
    )
}

export default BottomNavBar
