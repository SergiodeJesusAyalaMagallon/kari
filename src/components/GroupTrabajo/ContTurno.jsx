import React from 'react'
import CardTurno from './CardTurno'
import Line from './Line'
import {  PersonAddRounded } from '@material-ui/icons'
import ButtonIT from '../Compartidos/ButtonIT'


const ContTurno = () => {
    return (
        <div>
            <CardTurno              
                Titulo="Patricia Domenech"
                Texto="Encargado de base"
                Avatar="P"
            />
            <Line/>
            <CardTurno              
                Titulo="Bruno Pastor Amado"
                Texto=" "
                Avatar="B"
            />
            <Line/>
            <CardTurno              
                Titulo="Eulogio Sanchez"
                Texto=" "
                Avatar="E"
            />
            <Line/>
            <CardTurno              
                Titulo="Benita Linares Barragan"
                Texto=" "
                Avatar="B"
            />
            <Line/>
            <CardTurno              
                Titulo="Enrique de la Cruz"
                Texto=" "
                Avatar="E"
            />
            <Line/>
            <CardTurno              
                Titulo="Raimundo Canto"
                Texto=" "
                Avatar="R"
            />
            <Line/>
            <div className="mt-7">
                <ButtonIT Icono={PersonAddRounded} Texto="Agregar Miembros"/>
            </div>

        </div>     

    )
}

export default ContTurno

