import { Edit } from '@material-ui/icons'
import React from 'react'
import ButtonIT from '../../Compartidos/ButtonIT'
import Button from '../Button'
const ContenidoCronometria = () => {
    return (
        <div>
            <div className="mt-10">
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:02</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Hora de la llamada</div>
                </div>
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:08</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Salida de base</div>
                </div><div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:23</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Llegada al lugar</div>
                </div>
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary700 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200">01:58</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">PM</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Inicio de traslado</div>
                </div>
                <div className="grid grid-cols-12 w-10/12 m-auto bg-background rounded-xl mb-14">
                    <div className="col-span-3 bg-primary200 -m-2 rounded-lg px-2 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200"></div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center"></div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-lg">Llegada a hospital</div>
                </div>
            </div>
            <div className="mt-5">
                <ButtonIT Icono={Edit} Texto="Editar"/>
            </div>
            <Button
               Titulo="Marcar llegada a hospital"
            />
        </div>
    )
}

export default ContenidoCronometria
