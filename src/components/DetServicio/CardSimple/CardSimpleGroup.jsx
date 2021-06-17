import React from 'react'
import CardSimple from './CardSimple'
import {FolderSharedRounded,SentimentVeryDissatisfiedRounded,LocalHospitalRounded} from '@material-ui/icons'

const CardSimpleGroup = () => {
    return (
        <div className="flex">
            <CardSimple
                Fig={FolderSharedRounded}
                texto="Datos del paciente"
            />
            <CardSimple
                Fig={SentimentVeryDissatisfiedRounded}
                texto="Lesiones / enferme…"
            />
            <CardSimple
                Fig={LocalHospitalRounded}
                texto="Estado del paciente"
            />
            
        </div>
    )
}

export default CardSimpleGroup
