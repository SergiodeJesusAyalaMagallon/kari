import React from 'react'
import BusquedaIcon from '@material-ui/icons/SearchRounded';

const Busqueda = () => {
    return (
        <div className="bg-onPrimary text-onBackground font-Sans font-semibold text-base rounded-lg grid grid-cols-12 h-10">
            <input className="mx-4 col-span-10" type="text" placeholder="Búsqueda"/>
            <button className="bg-primary200 col-span-2 text-onPrimary rounded-lg -mr-1"><BusquedaIcon/></button>
        </div>
    )
}

export default Busqueda
