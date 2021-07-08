import { DescriptionRounded } from '@material-ui/icons'
import React from 'react'
import { TextareaAutosize } from '@material-ui/core'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Diagnostico = () => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="w-3/4 m-auto">
                    <div className="w-1/2 m-auto mt-10 flex justify-center text-primary200"><DescriptionRounded style={{fontSize:"500%"}}/></div>
                    <div className="w-11/12 text-center m-auto mt-2 text-2xl text-primary500 font-Roboto font-bold">Observaciones y diagnóstico presuntivo</div>
                    <div className="w-10/12 text-center m-auto mt-4 mb-10 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
                </div>
            </div>
            <div className="w-10/12 lg:w-4/12 m-auto">
                <div className="bg-primary300 rounded-t-lg w-10/12 pl-4 py-1 font-Sans font-bold text-base text-onPrimary">Observaciones y diagnóstico</div>
                <TextareaAutosize
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full"
                value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"
                />
            </div>
            <div className="mt-28">
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

export default Diagnostico
