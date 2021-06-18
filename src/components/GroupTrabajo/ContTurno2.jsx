import React from 'react'
import CardTurno from './CardTurno'
import ButtonAgregar from './ButtonAgregar'
import Line from './Line'


const ContTurno2 = () => {
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
            <ButtonAgregar/>

        </div>     

    )
}

export default ContTurno2