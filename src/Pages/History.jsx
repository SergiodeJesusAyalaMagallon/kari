import { AddCircleRounded, FilterListRounded, RoomRounded } from '@material-ui/icons'
import React from 'react'
import BottomNavBar from '../components/HomePage/BottomNavBar'
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Busqueda from '../components/Compartidos/Busqueda'
import { FormControl, MenuItem, Modal, Select } from '@material-ui/core'
import MasHistory from '../components/Pops/MasHistory'
import CardHistory from '../components/History/CardHistory'
import { CalendarSm ,UbicSm ,MapaSm,CuidadosSm, AmbulanceSM } from '../Assets/Icons'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "90%",
        color:"#4F4CB1",
        marginLeft:"15px"
    },
    Select:{
        color:"#4F4CB1",
        background:"#FFFFFF"
    }
}));

const History = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <MasHistory onClick={handleClose}/>
    );

    const classes = useStyles();
    const [value, setValue] = React.useState(10);
    const [open2, setOpen2] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    
    const handleOpen2 = () => {
        setOpen2(true);
    };

    return (
        <div>
            <div className="h-screen overflow-scroll">
            <div className="static w-full h-64 bg-primary900 flex justify-center">
                <div className="w-11/12 my-12">
                    <div className="mx-2">
                        <div className=" text-2xl text-background font-Roboto font-bold">Historial de servicios prehospitalarios y traslados</div>
                        <div className="text-sm text-primary200 font-Sans font-normal pt-1"><RoomRounded style={{fontSize:'110%', marginRight:'.5%'}}/>Sahuayo Michoacán</div>
                    </div>
                </div>
            </div>
            <div className="-mt-24 ml-8 grid grid-cols-12 w-12/12">
            <div className="col-span-9  w-11/12 h-10 lg:w-7/12">
                <Link
                    component = {RouterLink}
                    to = "/Search"
                    color = "inherit"
                    aria-label = "menu"
                >   
                    <Busqueda Color="Primary200"/>
                </Link>
            </div>
            <div className="col-span-3 w-9/12 lg:w-5/12 lg:ml-20 h-10 mr-2">
            <Link
                    component = {RouterLink}
                    to = "/Filtrar"
                    color = "inherit"
                    aria-label = "menu"
                >   
                <div className="text-secondary">
                
                <div className="w-full grid grid-cols-12">
            <div className="flex flex-wrap content-center justify-center bg-secondary500 rounded-lg col-span-12 h-10">
                <FilterListRounded className="text-onPrimary"/>
            </div>
        </div>
                </div>
                    
                </Link>
            </div>
        </div>
        <div className="bg-onPrimary rounded-2xl w-10/12 lg:w-5/12 m-auto mt-8">
                    <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open2}
                            onClose={handleClose2}
                            onOpen={handleOpen2}
                            value={value}
                            onChange={handleChange}
                        >
                        <MenuItem value={10}>Antiguedad ascendente</MenuItem>
                        <MenuItem value={20}>Valor 2</MenuItem>
                        <MenuItem value={30}>Valor 3</MenuItem>
                        </Select>
                    </FormControl>
        </div>
        <div className="mt-10 pb-20">

            <CardHistory
                Icono={AmbulanceSM}
                Dia="01"
                Mes="MAR"
                Año="2021"
                Titulo="Servicio de emergencia"
                Subtitulo="Accidente vehicular"
                HoraI="11:34"
                HoraF="13:26"
            />

            <CardHistory
                Icono={CalendarSm}
                Dia="01"
                Mes="MAR"
                Año="2021"
                Titulo="Cobertura de evento"
                Subtitulo="Cobertura de evento"
                HoraI="12:00"
                HoraF="14:00"
            />

            <CardHistory
                Icono={UbicSm}
                Dia="02"
                Mes="MAR"
                Año="2021"
                Titulo="Traslado local"
                Subtitulo="Persona enferma"
                HoraI="10:30"
                HoraF="11:42"
            />

            <CardHistory
                Icono={AmbulanceSM}
                Dia="02"
                Mes="MAR"
                Año="2021"
                Titulo="Servicio de emergencia"
                Subtitulo="Apoyo de incendio"
                HoraI="10:42"
                HoraF="18:24"
            />

            <CardHistory
                Icono={CuidadosSm }
                Dia="05"
                Mes="MAR"
                Año="2021"
                Titulo="Cuidados intensivos"
                Subtitulo="Complicación diabetica"
                HoraI="23:12"
                HoraF="02:28"
            />

            <CardHistory
                Icono={MapaSm }
                Dia="12"
                Mes="MAR"
                Año="2021"
                Titulo="Traslado foráneo"
                Subtitulo="Traslado foráneo"
                HoraI="22:17"
                HoraF="23:59"
            />


        </div>
            </div>
            <BottomNavBar variante2="NavSelected"/>
            <div className="absolute bottom-10 lg:bottom-3 w-2/12 flex justify-end right-3">
            <button type="button" onClick={handleOpen}><div className=" grid grid-cols-12 rounded-full text-secondary500 py-2"><AddCircleRounded style={{fontSize:"400%"}}/></div></button>
            <Modal
                open={open}
            >
            {body}
            </Modal>
            
        </div>
        </div>
    )
}

export default History
