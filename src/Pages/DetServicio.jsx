import React from 'react'
import Headerxl from '../components/DetServicio/Header/Headerxl'
import CardFecha from '../components/DetServicio/Header/CardFecha'
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
import { Checkbox, FormControl, FormControlLabel, FormGroup, Modal } from '@material-ui/core'
import SelectorBox from '../components/Pops/SelectorBox'

const LabelPer = ({nombre}) =>{
    return(
        <div className="bg-surface w-full py-4 rounded-xl">
            <div className="text-primary600 font-Roboto font-medium flex flex-wrap items-center pl-4 tracking-tighter">{nombre}</div>
        </div>
    )
}

const DetServicio = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
        });
    
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
    
    const { Poblacion } = state;


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <SelectorBox 
        onClick={handleClose}
        titulo="Solicitante del servicio"
        content={
            <div>
                <FormControl component="fieldset" className="w-full">
                            <FormGroup className="mx-6 w-full">
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="Ayuntamiento"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="C5i" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="CRUM" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="Hospital" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="Poblacion abierta" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            </FormGroup>
                        </FormControl>
            </div>
        }
        />
    );

    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <SelectorBox onClick={handleClose2}
        titulo="Derivación del paciente"
        content={
            <div>
                <FormControl component="fieldset" className="w-full">
                            <FormGroup className="mx-6 w-full">
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="Atención en el domicilio o sitio…"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="A establecimiento de aten…" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="Persona fallecida" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="Servicio cancelado/falsa alarma" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="Otros" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            </FormGroup>
                        </FormControl>
            </div>
        }
        />
    );

    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };
    
    const handleClose3 = () => {
        setOpen3(false);
    };
    const body3 = (
        <SelectorBox onClick={handleClose3}
        titulo="Servicio realizado"
        content={
            <div className="h-96 overflow-y-scroll">
                <FormControl component="fieldset" className="w-full">
                            <FormGroup className="mx-6 w-full">
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="Cancelado/traslado por sus me…"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="Operativo/cobertura de evento" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="Otros traslados" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="Serv. De emergencia a esta…" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="Serv. De emergencia en la ubica…" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="Traslado interhospitalario" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="Traslado programado a estudio" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="Traslado programado a tratami..." />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            </FormGroup>
                        </FormControl>
            </div>
        }
        />
    );
    return (
        <div>
            <Headerxl/>
            <div className="-my-24">
                <CardFecha/>
            </div>
            <div className="-my-20">
                <CardElements/>
            </div>
            <div className="pt-20">
            <button type="button" onClick={handleOpen} className="w-full">
            <EditButton
                    Titulo="Solicitante"
                    Nombre="Población abierta"
                />
            </button>
            <Modal
                open={open}
            >
            {body}
            </Modal>

            <button type="button" onClick={handleOpen2} className="w-full">
            <EditButton
                    Titulo="Derivación"
                    Nombre="A establecimiento de atención médica"
                />
            </button>
            <Modal
                open={open2}
            >
            {body2}
            </Modal>
            <div className="mt-5">
            <button type="button" onClick={handleOpen3} className="w-full">
                <Button
                        Titulo="Agregar servicio realizado"
                    />
            </button>
            <Modal
                open={open3}
            >
            {body3}
            </Modal>  
                </div> 
            </div>
            <div className="my-10">
                <CardDatos 
                    Titulo="Datos del paciente"
                    Icono={WarningRounded}
                    Content={ContPaciente}
                    name="DP"
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
