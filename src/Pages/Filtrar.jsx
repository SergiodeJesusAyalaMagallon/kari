import { Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Modal, Select } from '@material-ui/core'
import { EventRounded } from '@material-ui/icons'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import PopFechIF from '../components/Pops/PopFechIF';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "90%",
        color:"#4F4CB1",
    },
    Select:{
        color:"#4F4CB1",
        background:"#FFFFFF"
    }
}));
const LabelPer = ({nombre}) =>{
    return(
        <div className="bg-onPrimary w-60 grid grid-cols-12 ">
            <div className="col-span-11 text-primary600 font-Roboto font-medium flex flex-wrap items-center pl-4">{nombre}</div>
        </div>
    )
}

const Filtrar = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
        });
    
        const handleChange3 = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
    
        const { Juan } = state;

    const classes = useStyles();

    const [value, setValue] = React.useState(10);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };


    const [value2, setValue2] = React.useState(10);
    const [open2, setOpen2] = React.useState(false);

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    
    const handleOpen2 = () => {
        setOpen2(true);
    };

    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };
    
    const handleClose3 = () => {
        setOpen3(false);
    };
    const body = (
        <PopFechIF onClick={handleClose3}/>
    );

    return (
        <div>
            <div className="h-screen overflow-scroll">
            <div className="static w-full h-48 bg-primary900 flex justify-center">
                <div className="w-11/12 my-12">
                    <div className="">
                        <div className=" text-2xl text-onPrimary font-Roboto font-bold text-center">Filtremos los resultados</div>
                        <div className="text-lg text-primary200 font-Sans font-semibold pt-1 text-center">Aplica los filtros que desees</div>
                    </div>
                </div>
            </div>
            
            <div className="w-10/12 m-auto mt-10 mb-10">
            <button type="button" onClick={handleOpen3} className="w-full">
            <div className="text-primary500 font-Roboto font-bold text-xl text-left">Fecha:</div>
                <div className="bg-onPrimary py-2 rounded-lg mt-2 text-primary300 font-semibold grid grid-cols-12">
                    <div className="col-span-10 text-center">Desde 01/03/21 al 31/03/21</div>
                    <div><EventRounded/></div>
                </div>
            </button>
            <Modal
                open={open3}
            >
            {body}
            </Modal>
                
            </div>

            
            <div className="w-10/12 m-auto mb-10">
                <div className="text-primary500 font-Roboto font-bold text-xl">Personal paramédico</div>
                <div className="bg-onPrimary py-2 rounded-lg mt-2 text-primary300 font-semibold">
                <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open2}
                            onClose={handleClose2}
                            onOpen={handleOpen2}
                            value={value2}
                            onChange={handleChange2}
                        >
                        <MenuItem value={10}>Cualquier paramédico</MenuItem>
                        <MenuItem value={20}>Valor 2</MenuItem>
                        <MenuItem value={30}>Valor 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="w-10/12 m-auto mb-10">
                <div className="text-primary500 font-Roboto font-bold text-xl">Tipo de servicio</div>
                <div className=" py-2 rounded-lg mt-2 text-primary300 font-semibold">
                <FormControl component="fieldset" className="w-full">
                            <FormGroup className="ml-7">
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Cualquier tipo"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Administrativo" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Cobertura de evento"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Cuidados intensivos" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Servicio de emergencia"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Traslado foráneo" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Traslado local"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            </FormGroup>
                        </FormControl>
                </div>
            </div>
            <div className="w-10/12 m-auto mb-10">
                <div className="text-primary500 font-Roboto font-bold text-xl">Solicitante</div>
                <div className=" py-2 rounded-lg mt-2 text-primary300 font-semibold">
                <FormControl component="fieldset" className="w-full">
                            <FormGroup className="ml-7">
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Cualquier solicitante"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Ayuntamiento" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="C5i"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="CRUM" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Hospital"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Población abierta" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            </FormGroup>
                        </FormControl>
                </div>
            </div>
            <div className="w-10/12 m-auto mb-10">
                <div className="text-primary500 font-Roboto font-bold text-xl">Derivación</div>
                <div className=" py-2 rounded-lg mt-2 text-primary300 font-semibold">
                <FormControl component="fieldset" className="w-full">
                            <FormGroup className="ml-7">
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Cualquier derivación"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Atención en el domicilio o sitio de…" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Persona fallecida"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Servicio cancelado / falsa alarma" />}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange3} name="gilad"/>}
                                label={<LabelPer nombre="Otros"/>}
                                className="bg-onPrimary w-full m-auto px-2 rounded-xl mb-2"
                            />
                            </FormGroup>
                        </FormControl>
                </div>
            </div>
            <div className="w-10/12 m-auto mb-52">
                <div className="text-primary500 font-Roboto font-bold text-xl">Servicio realizado</div>
                <div className="bg-onPrimary py-2 rounded-lg mt-2 text-primary300 font-semibold">
                <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={value}
                            onChange={handleChange}
                        >
                        <MenuItem value={10}>Cualquier servicio</MenuItem>
                        <MenuItem value={20}>Valor 2</MenuItem>
                        <MenuItem value={30}>Valor 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-2 absolute bottom-0 w-full bg-onPrimary">
                <Link
                    component = {RouterLink}
                    to = "/Historia"
                >  
                <div className="bg-onPrimary mt-4 w-10/12 m-auto rounded-xl mb-2 ml-6 text-primary500 flex justify-center border-2 border-primary500">
                    <div className="font-Roboto font-medium text-base py-2">Cancelar</div>
                </div>
            </Link>
            <Link
                    component = {RouterLink}
                    to = "/Historia"
                >  
                <div className="bg-primary700 mt-4 w-10/12 m-auto rounded-xl mr-6 mb-2 flex justify-center ">
                    <div className="font-Roboto font-medium text-base py-2 text-onPrimary">Aplicar filtros</div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Filtrar
