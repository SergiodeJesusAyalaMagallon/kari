import React from 'react'
import BusquedaIcon from '@material-ui/icons/SearchRounded';

const Busqueda = ({Color}) => {
    return (
        <div className="bg-onPrimary text-onBackground font-Sans font-semibold text-base rounded-lg grid grid-cols-12 h-10">
            <input className="mx-4 col-span-10" type="search" id="search" placeholder="Búsqueda"/>
            <div className="flex flex-wrap justify-center content-center col-span-2 text-onPrimary rounded-lg -mr-1" id={Color}><BusquedaIcon/></div>
        </div>
    )
}

export default Busqueda
