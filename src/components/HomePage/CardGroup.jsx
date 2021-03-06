import React from 'react'
import Card from './Card'
import { Ambulance, Calendar, Map } from '../../Assets/Icons';


const CardGroup = () => {
    return (
        <div className="pb-20">
            <Card
                icon={Ambulance}
                matricula="1854MIC"
                titulo="Servicio de emergencia"
                boton="Abrir"
                porcentaje={75}
                progreso={"p75"}
            />
            <Card
                icon={Calendar}
                matricula="1724MIC"
                titulo="Cobertura de evento"
                boton="Abrir"
                porcentaje={50}
                progreso={"p50"}
            />
            <Card
                icon={Map}
                matricula="1491MIC"
                titulo="Traslado foraneo"
                boton="Abrir"
                porcentaje={83}
                progreso={"p80"}
            />
            <Card
                icon={Ambulance}
                matricula="1854MIC"
                titulo="Servicio de emergencia"
                boton="Abrir"
                porcentaje={75}
                progreso={"p75"}
            />
            <Card
                icon={Calendar}
                matricula="1724MIC"
                titulo="Cobertura de evento"
                boton="Abrir"
                porcentaje={50}
                progreso={"p50"}
            />
            <Card
                icon={Map}
                matricula="1491MIC"
                titulo="Traslado foraneo"
                boton="Abrir"
                porcentaje={83}
                progreso={"p80"}
            />
        </div>
    )
}

export default CardGroup
