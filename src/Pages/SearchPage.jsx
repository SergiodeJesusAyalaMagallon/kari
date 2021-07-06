import React from 'react'
import Busqueda from '../components/Compartidos/Busqueda'
import Atras from '@material-ui/icons/ArrowBackRounded';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'


const SearchPage = () => {
    return (
        <div>
            <div className="text-primary500 h-14 pt-4 pl-4">
            <Link
                    component = {RouterLink}
                    to = "/"
                    color = "inherit"
                    aria-label = "menu"
                >   
                    <Atras style={{fontSize:"200%"}}/>
                </Link>
            </div>
            <div className=" w-2/3 m-auto mt-8 lg:mt-36">
                <div className="flex justify-center text-primary600 font-Roboto font-bold text-2xl lg:text-5xl">Bien, Juan</div>
                <div className="flex justify-center text-onBackground font-Sans font-normal text-sm lg:text-xl">¿Qué es lo que estamos buscando?</div>
            </div>
            <div className="mt-12 w-10/12 lg:w-5/12 m-auto pb-96">
                <Busqueda Color="Primary500"/>
            </div>
            <div className="mt-12 w-10/12 m-auto pb-36">
            </div>
        </div>
    )
}

export default SearchPage
