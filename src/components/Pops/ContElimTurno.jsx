import { Avatar } from '@material-ui/core'
import React from 'react'

const ContElimTurno = () => {
    return (
        <div className="bg-background">
            <div className="w-10/12 m-auto font-Roboto font-bold text-lg text-onBackground text-center pb-2">
            Los miembros del turno NO serán eliminados, estos solo quedarán sin un turno asignado
            </div>
            <div className="h-72 overflow-scroll">
            <div className="w-10/12 grid grid-cols-12 bg-surface rounded-xl m-auto mt-6">
                <div className="col-span-1 -ml-1.5 -mt-1"><Avatar style={{width:"220%",height:"110%"}}/></div>
                <div className="col-span-11 py-3 font-Roboto font-medium text-base text-primary600 ml-11">Lorem ipsum dolor sit</div>
            </div>
            <div className="w-10/12 grid grid-cols-12 bg-surface rounded-xl m-auto mt-6">
                <div className="col-span-1 -ml-1.5 -mt-1"><Avatar style={{width:"220%",height:"110%"}}/></div>
                <div className="col-span-11 py-3 font-Roboto font-medium text-base text-primary600 ml-11">Lorem ipsum dolor sit</div>
            </div>
            <div className="w-10/12 grid grid-cols-12 bg-surface rounded-xl m-auto mt-6">
                <div className="col-span-1 -ml-1.5 -mt-1"><Avatar style={{width:"220%",height:"110%"}}/></div>
                <div className="col-span-11 py-3 font-Roboto font-medium text-base text-primary600 ml-11">Lorem ipsum dolor sit</div>
            </div>
            <div className="w-10/12 grid grid-cols-12 bg-surface rounded-xl m-auto mt-6">
                <div className="col-span-1 -ml-1.5 -mt-1"><Avatar style={{width:"220%",height:"110%"}}/></div>
                <div className="col-span-11 py-3 font-Roboto font-medium text-base text-primary600 ml-11">Lorem ipsum dolor sit</div>
            </div>
            <div className="w-10/12 grid grid-cols-12 bg-surface rounded-xl m-auto mt-6">
                <div className="col-span-1 -ml-1.5 -mt-1"><Avatar style={{width:"220%",height:"110%"}}/></div>
                <div className="col-span-11 py-3 font-Roboto font-medium text-base text-primary600 ml-11">Lorem ipsum dolor sit</div>
            </div>
            <div className="w-10/12 grid grid-cols-12 bg-surface rounded-xl m-auto mt-6">
                <div className="col-span-1 -ml-1.5 -mt-1"><Avatar style={{width:"220%",height:"110%"}}/></div>
                <div className="col-span-11 py-3 font-Roboto font-medium text-base text-primary600 ml-11">Lorem ipsum dolor sit</div>
            </div>
            </div>
        </div>
    )
}

export default ContElimTurno
