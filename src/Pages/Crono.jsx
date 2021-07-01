import { Edit, TimerRounded,AddCircleRounded } from '@material-ui/icons'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Crono = () => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="w-3/4 m-auto">
                    <div className="w-1/2 m-auto mt-8 flex justify-center text-primary200"><TimerRounded style={{fontSize:"500%"}}/></div>
                    <div className="w-11/12 text-center m-auto  text-2xl text-primary500 font-Roboto font-bold">Cronometría</div>
                    <div className="w-10/12 text-center m-auto mt-1 mb-10 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-12 w-full m-auto bg-background rounded-xl mb-14">
                    <div className="bg-secondary300 text-onPrimary rounded-r-xl col-span-2 mr-3 flex flex-wrap justify-center items-center -mt-2 -mb-2"><Edit style={{fontSize:"200%"}}/></div>
                    <div className="col-span-2 bg-primary700 -m-2 ml-2 -mr-6 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:02</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className="bg-onPrimary col-span-7  pt-2 ml-6 pl-4 rounded-r-xl  font-Sans font-bold text-primary300 text-lg">Hora de la llamada</div>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-12 w-full m-auto bg-background rounded-xl mb-14">
                    <div className="bg-secondary300 text-onPrimary rounded-r-xl col-span-2 mr-3 flex flex-wrap justify-center items-center -mt-2 -mb-2"><Edit style={{fontSize:"200%"}}/></div>
                    <div className="col-span-2 bg-primary700 -m-2 ml-2 -mr-6 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:08</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className="bg-onPrimary col-span-7  pt-2 ml-6 pl-4 rounded-r-xl  font-Sans font-bold text-primary300 text-lg">Salida de base</div>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-12 w-full m-auto bg-background rounded-xl mb-14">
                    <div className="bg-secondary300 text-onPrimary rounded-r-xl col-span-2 mr-3 flex flex-wrap justify-center items-center -mt-2 -mb-2"><Edit style={{fontSize:"200%"}}/></div>
                    <div className="col-span-2 bg-primary700 -m-2 ml-2 -mr-6 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:23</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className="bg-onPrimary col-span-7  pt-2 ml-6 pl-4 rounded-r-xl  font-Sans font-bold text-primary300 text-lg">Llegada al lugar</div>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-12 w-full m-auto bg-background rounded-xl mb-14">
                    <div className="bg-secondary300 text-onPrimary rounded-r-xl col-span-2 mr-3 flex flex-wrap justify-center items-center -mt-2 -mb-2"><Edit style={{fontSize:"200%"}}/></div>
                    <div className="col-span-2 bg-primary700 -m-2 ml-2 -mr-6 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:58</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className="bg-onPrimary col-span-7  pt-2 ml-6 pl-4 rounded-r-xl  font-Sans font-bold text-primary300 text-lg">Inicio de traslado</div>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-12 w-full m-auto bg-background rounded-xl mb-14">
                    <div className="bg-secondary300 text-onPrimary rounded-r-xl col-span-2 mr-3 flex flex-wrap justify-center items-center -mt-2 -mb-2"><AddCircleRounded style={{fontSize:"200%"}}/></div>
                    <div className="col-span-2 bg-primary200 -m-2 ml-2 -mr-6 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200"></div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center"></div>
                    </div>
                    <div className="bg-onPrimary col-span-7  pt-2 ml-6 pl-4 rounded-r-xl  font-Sans font-bold text-primary300 text-lg">Llegada al hospital</div>
                </div>
            </div>

            <div className="mt-16">
            <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-primary600 w-8/12 m-auto rounded-xl mb-4 text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-3">Guardar datos</div>
                </div>
            </Link>
            <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-background w-8/12 m-auto rounded-xl mb-8 flex justify-center border-2 border-primary500">
                    <div className="font-Roboto font-medium text-base py-3 text-primary500">Cancelar</div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Crono
