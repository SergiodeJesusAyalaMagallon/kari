import React from 'react'
import {HomeRounded,HistoryRounded,NotificationsRounded,SettingsRounded, DescriptionRounded} from '@material-ui/icons'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const LateralNAv = ({variante1,variante2,variante3,variante4,Not}) => {
    return (
        <div className="bg-onPrimary w-auto absolute top-44 invisible lg:visible" style={{height:"565px"}}>
            <div className="mt-32 mx-3">
                <Link
                    component = {RouterLink}
                    to = "/"
                >   
                    <div className="bg-background w-16 m-auto flex text-primary300 rounded-xl py-2 hover:scale-x-150" id={variante1}>
                    <div className="ml-5 flex justify-center"><HomeRounded style={{fontSize:"170%"}}/></div>
                    <div className="ml-5 invisible">Inicio</div>
                </div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Historia"
                >   
                   <div className="bg-background w-16 m-auto flex text-primary300 rounded-xl py-2 mt-6 " id={variante2}>
                    <div className="ml-5 flex justify-center"><HistoryRounded style={{fontSize:"170%"}}/></div>
                    <div className="ml-5 invisible">Historial</div>
                </div> 
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Informes"
                >   
                    <div className="bg-background w-16 m-auto flex text-primary300 rounded-xl py-2 mt-6">
                    <div className="ml-5 flex justify-center"><DescriptionRounded style={{fontSize:"170%"}}/></div>
                    <div className="ml-5 invisible">Informes</div>
                </div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Noti"
                >   
                    <div className="bg-background w-16 m-auto flex text-primary300 rounded-xl py-2 mt-6" id={variante3}>
                    <div className="ml-5 flex justify-center"><NotificationsRounded style={{fontSize:"170%"}}/></div>
                    <div className="ml-5 invisible">Notificaciones</div>
                    <span className="absolute top-80 left-16 text-xs font-bold text-primary500 bg-onPrimary rounded-full mt-1 shadow-inner" id={Not}>3</span>
                </div>
                </Link>
                <Link
                    component = {RouterLink}
                    to = "/Config"
                >   
                    <div className="bg-background w-16 m-auto flex text-primary300 rounded-xl py-2 mt-6" id={variante4}>
                    <div className="ml-5 flex justify-center"><SettingsRounded style={{fontSize:"170%"}}/></div>
                    <div className="ml-5 invisible">Configuración</div>
                </div>
                </Link>
                
                
                
                
            </div>
        </div>
    )
}

export default LateralNAv
