import { CancelRounded, RoomRounded } from '@material-ui/icons'
import React from 'react'
import { AdminPop, AmbulanceDerPri, CalendarPri, Cuidados, MapPri} from '../../Assets/Icons'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const AddServices = ({onClick}) => {
    return (
        <div className="mt-20">
            <div className="bg-background w-10/12 m-auto rounded-2xl">
                <div className="text-center text-primary500 font-Roboto font-bold text-2xl pt-4">Tipo de servicio</div>
                <div className="grid grid-cols-2 mt-8">
                    <div className="grid grid-cols-1 bg-surface mr-2 rounded-r-2xl py-2">
                        <div className="flex justify-center text-primary200 pt-2">{AdminPop}</div>
                        <div className="flex justify-center text-center text-primary600 font-Roboto font-bold text-sm w-9/12 m-auto">Administrativo</div>
                    </div>
                    <div className="grid grid-cols-1 bg-surface ml-2 rounded-l-2xl py-2">
                        <div className="flex justify-center text-primary200">{CalendarPri}</div>
                        <div className="flex justify-center text-center text-primary600 font-Roboto font-bold text-sm w-9/12 m-auto">Cobertura de evento</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-8">
                    <div className="grid grid-cols-1 bg-surface mr-2 rounded-r-2xl py-4">
                        <div className="flex justify-center text-primary200">{Cuidados}</div>
                        <div className="flex justify-center text-center text-primary600 font-Roboto font-bold text-sm w-9/12 m-auto">Cuidados intensivos</div>
                    </div>

                    <Link
                    component = {RouterLink}
                    to = "/AddPetitioner"
                    >   
                    <div className="grid grid-cols-1 bg-surface ml-2 rounded-l-2xl py-2">
                        <div className="flex justify-center text-primary200 pt-4">{AmbulanceDerPri}</div>
                        <div className="flex justify-center text-center text-primary600 font-Roboto font-bold text-sm w-9/12 m-auto">Servicio de emergencia</div>
                    </div>
                    </Link>

                    
                </div>

                <div className="grid grid-cols-2 mt-8 pb-16">
                    <div className="grid grid-cols-1 bg-surface mr-2 rounded-r-2xl py-6">
                        <div className="flex justify-center text-primary200">{MapPri}</div>
                        <div className="flex justify-center text-center text-primary600 font-Roboto font-bold text-sm w-9/12 m-auto">Traslado foráneo</div>
                    </div>
                    <div className="grid grid-cols-1 bg-surface ml-2 rounded-l-2xl py-2">
                        <div className="flex justify-center text-primary200 mt-2"><RoomRounded style={{fontSize:"350%"}}/></div>
                        <div className="flex justify-center text-center text-primary600 font-Roboto font-bold text-sm w-9/12 m-auto -mt-2">Traslado local</div>
                    </div>
                </div>
            </div>
            <div className="w-4/12 m-auto grid grid-cols-12 rounded-full bg-secondary500 text-onPrimary py-2 mt-10" onClick={onClick}>
                <div className="col-span-4 flex justify-center"><CancelRounded/></div>
                <div className="col-span-8 font-Roboto font-bold text-left ">Cancelar</div>
            </div>
        </div>
    )
}

export default AddServices
