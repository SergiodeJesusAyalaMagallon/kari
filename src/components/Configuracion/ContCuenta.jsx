import React from 'react'
import CardITTF from './CardITTF'
import CarITFV2 from './CarITFV2'
import Line from './Line'
import { Apple, AssignmentIndRounded } from '@material-ui/icons';

const ContCuenta = () => {
    return (
        <div>
            <CarITFV2/>
            <Line/>
            <CardITTF
                Icono={AssignmentIndRounded}
                Titulo="Nombre"
                Texto="Juan Javier Rubio"
            />
            <Line/>
            <CardITTF
                Icono={AssignmentIndRounded}
                Titulo="Cuenta Google"
                Texto="Juan_rubio@gmail.com"
            />
            <Line/>
            <CardITTF
                Icono={Apple}
                Titulo="Cuenta Apple"
                Texto="Sin vincular"
            />
        </div>
    )
}

export default ContCuenta
