import React from 'react'
import CardNoti from '../components/Notifications/CardNoti'
import  Warning from '@material-ui/icons/WarningRounded'
import  New from '@material-ui/icons/NewReleasesRounded'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'

const Notifications = () => {
    return (
        <div className="bg-background h-screen">
            <div className="pt-20 w-5/6 m-auto text-2xl text-primary600 font-Roboto font-bold text-center">
                Tienes 3 nuevas notificaciones
            </div>
            <div className="mt-9 w-11/12 m-auto">
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
            <div className="mt-10 w-full mx-auto text-base text-primary300 font-Roboto font-medium text-center bg-background">
            <div>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{backgroundColor:"#E9E8F5",boxShadow:"none"}}
                        >
                            <div className="text-primary300 font-Roboto font-medium m-auto">Mostrar notificaciones anteriores</div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-background">
                        <div>
                        <div className="text-primary300 font-Roboto font-medium">Notificaciones anteriores</div>
                        <div className="mt-9 w-full">
                            <CardNoti
                    titulo="Se te agregó como miembro de un servicio"
                    texto="Ahora eres parte de un registro de Cubrimiento de evento"
                    Icono={New}
                    id="newNoti"
                />
                <CardNoti
                    titulo="Se ha finalizado el registro de Traslado foráneo"
                    texto="Ya puedes ver los detalles del servicio y revisar que todo ande bien"
                    Icono={New}
                    id="newNoti"
                />
                <CardNoti
                    titulo="Quedan tan solo 5 minutos para cerrar el reporte"
                    texto="No te olvides de terminar el registro del servicio de Traslado foráneo brindado"
                    Icono={Warning}
                />
                <CardNoti
                    titulo="Bienvenido Juan, ya eres parte de Protección Ci…"
                    texto="Ahora eres parte del equipo de Protección Civil de Sahuayo Michoacán"
                    Icono={New}
                    id="newNoti"
                />
                        </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            </div>
        </div>
    )
}

export default Notifications
