import React from 'react'
import Headerxl from '../components/DetServicio/Header/Headerxl'
import CardFecha from '../components/DetServicio/Header/CardFecha'
import CardSimpleGroup from '../components/DetServicio/CardSimple/CardSimpleGroup'
import CardElements from '../components/DetServicio/ElementService/CardElements'
import EditButton from '../components/DetServicio/EditButton'
import Button from '../components/DetServicio/Button'
import CardDatos from '../components/DetServicio/CardDatos'
import ContPaciente from '../components/DetServicio/Contenido/ContPaciente'
import {WarningRounded,CheckCircleRounded} from '@material-ui/icons'
import ContLesiones from '../components/DetServicio/Contenido/ContLesiones'
import ContEdoPacient from '../components/DetServicio/Contenido/ContEdoPacient'
import ContKilometraje from '../components/DetServicio/Contenido/ContKilometraje'
import ContClasDiag from '../components/DetServicio/Contenido/ContClasDiag'
import CardEspDatos from '../components/DetServicio/CardEspDatos'
import ContenidoCronometria from '../components/DetServicio/Contenido/ContenidoCronometria'

const DetServicio = () => {
    return (
        <div>
            <Headerxl/>
            <div className="-my-24">
                <CardFecha/>
            </div>
            <div className="my-32 ml-2">
                <CardSimpleGroup/>
            </div>
            <div className="-my-20">
                <CardElements/>
            </div>
            <div className="pt-20">
                <EditButton
                    Titulo="Solicitante"
                    Nombre="Población abierta"
                />
                <EditButton
                    Titulo="Derivación"
                    Nombre="A establecimiento de atención médica"
                />
                <div className="mt-5">
                    <Button
                        Titulo="Agregar servicio realizado"
                    />
                </div> 
            </div>
            <div className="my-10">
                <CardDatos 
                    Titulo="Datos del paciente"
                    Icono={WarningRounded}
                    Content={ContPaciente}
                />
            </div>

            <div className="my-10">
                <CardDatos 
                    Titulo="Lesiones / enfermedades"
                    Icono={WarningRounded}
                    Content={ContLesiones}
                />
            </div>

            <div className="my-10">
                <CardDatos 
                    Titulo="Estado del paciente"
                    Icono={CheckCircleRounded}
                    Content={ContEdoPacient}
                    Color="azul"
                />
            </div>
            <div className="my-10">
                <CardDatos 
                    Titulo="Cronometría"
                    Icono={WarningRounded}
                    Content={ContenidoCronometria}
                />
            </div>
            <div className="my-10">
                <CardDatos 
                    Titulo="Kilometraje"
                    Icono={WarningRounded}
                    Content={ContKilometraje}
                />
            </div>
            <div className="my-10">
                <CardDatos 
                    Titulo="Clasificacion diagnostica"
                    Icono={CheckCircleRounded}
                    Content={ContClasDiag}
                    Color="azul"
                />
            </div>
            <div className="my-10">
                <CardEspDatos/>
            </div>
        </div>
        
    )
}

export default DetServicio
