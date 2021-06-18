import React from 'react'
import {GroupRounded, ArrowForwardIosRounded} from '@material-ui/icons'


const CarITF = () => {
    return (
        <div className="grid grid-cols-12 bg-onPrimary rounded-full text-primary500">
            <div className="bg-background rounded-full col-span-2 py-3 flex flex-wrap justify-center items-center">
                <GroupRounded/>
            </div>
            <div className="col-span-9 ml-5 flex flex-wrap  items-center font-Roboto font-extrabold text-left">Grupo de trabajo</div>
            <div className="col-span-1 flex flex-wrap  items-center mx-3">
                <ArrowForwardIosRounded/>
            </div>
        </div>
    )
}

export default CarITF
