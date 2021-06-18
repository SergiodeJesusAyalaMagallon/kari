import React from 'react'
import Line from './Line'
import OptionRadio from './OptionRadio'
import {NotificationsRounded, Brightness2Rounded }   from '@material-ui/icons'



const ContApli = () => {
    return (
        <div>
            <OptionRadio
                Icono= {NotificationsRounded}
                Texto="Recibir notificaciones"
            />
            <Line/>
            <OptionRadio
                Icono={Brightness2Rounded}
                Texto="Modo oscuro"
            />
        </div>
    )
}

export default ContApli
