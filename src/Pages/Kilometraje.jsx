import {DoubleArrowRounded, TrendingUpRounded } from '@material-ui/icons'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Kilometraje = () => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="w-3/4 m-auto">
                    <div className="w-1/2 m-auto mt-8 flex justify-center text-primary200"><TrendingUpRounded style={{fontSize:"500%"}}/></div>
                    <div className="w-11/12 text-center m-auto  text-2xl text-primary500 font-Roboto font-bold">Kilometraje</div>
                    <div className="w-10/12 text-center m-auto mt-1 mb-10 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
                </div>
            </div>
            <div className="w-10/12 lg:w-5/12 m-auto">

            <div className="w-11/12 m-auto bg-onPrimary rounded-2xl mb-2">
                <div className="bg-primary300 rounded-t-full rounded-r-full pl-4 py-2 font-Sans font-bold text-base text-onPrimary text-center">Kilometraje inicial</div>
                <input className="bg-onPrimary rounded-2xl rounded-t-none py-4 pl-4 font-Roboto font-medium text-2xl text-primary400 w-full" type="text" placeholder="Kilometro inicial"/>
            </div>
            <div className="m-auto w-3/12 lg:w-2/12 text-primary100 transform rotate-90">
                <DoubleArrowRounded  style={{fontSize:"500%"}}/>
            </div>
            <div className="w-11/12 m-auto bg-onPrimary rounded-2xl mt-2">
                <input className="bg-onPrimary rounded-2xl rounded-b-none py-4 pl-4 font-Roboto font-medium text-2xl text-primary400 w-full" type="text" placeholder="Kilometro final"/>
                <div className="bg-primary300 rounded-b-full rounded-l-full pl-4 py-2 font-Sans font-bold text-base text-onPrimary text-center">Kilometraje final</div>
            </div>

            </div>
            <div className="mt-16">
            <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-primary600 w-8/12 lg:w-3/12 m-auto rounded-xl mb-4 text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-3">Guardar datos</div>
                </div>
            </Link>
            <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-background w-8/12 lg:w-3/12 m-auto rounded-xl mb-8 flex justify-center border-2 border-primary500">
                    <div className="font-Roboto font-medium text-base py-3 text-primary500">Cancelar</div>
                </div>
            </Link>
                
                
            </div>
        </div>
    )
}

export default Kilometraje
