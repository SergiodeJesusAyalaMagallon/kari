import React from 'react'
import CardNoti from '../components/Notifications/CardNoti'
import  Warning from '@material-ui/icons/WarningRounded'
import  New from '@material-ui/icons/NewReleasesRounded'

const Notifications = () => {
    return (
        <div className="bg-background h-screen">
            <div className="pt-20 w-5/6 m-auto text-2xl text-primary600 font-Roboto font-bold text-center">
                Tienes 3 nuevas notificaciones
            </div>
            <div className="mt-9">
                <CardNoti
                    titulo="Un Reporte sin cerrar está por vencer"
                    texto="Recuerda terminar el registro de Traslado foráneo antes de las 02:34 de la tarde"
                    Icono={Warning}
                />
                <CardNoti
                    titulo="No se ha registrado la hora de llegada a la base"
                    texto="No te olvides de agregar la hora de llegada a la base en el Servicio de emergencia"
                    Icono={Warning}
                />
                <CardNoti
                    titulo="Se te agregó como miembro de un servicio"
                    texto="Ahora eres parte de un registro de Servicio de emergencia"
                    Icono={New}
                    id="newNoti"
                />
            </div>
            <div className="mt-10 w-5/6 mx-auto text-base text-primary300 font-Roboto font-medium text-center">
                Mostrar notificaciones anteriores
            </div>
        </div>
    )
}

export default Notifications
