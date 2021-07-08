import { FormControl,Select,MenuItem } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "90%",
    },
    Select:{
        color:"#4F4CB1",
        background:"#FFFFFF"
    }
}));



const EdoPaciente = ({Titulo,Figura}) => {

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




    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="w-3/4 m-auto">
                    <div className="w-1/2 m-auto mt-8 flex justify-center text-primary200">{Figura}</div>
                    <div className="w-11/12 text-center m-auto mt-2 text-2xl text-primary500 font-Roboto font-bold">{Titulo}</div>
                    <div className="w-10/12 text-center m-auto mt-2 mb-10 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
                </div>
            </div>

            <div className="w-10/12 lg:w-4/12 m-auto">
                <div className="w-11/12 m-auto rounded-2xl mb-2">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Asistencia</div>
                    <div className="bg-onPrimary rounded-b-2xl rounded-tr-2xl">
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
                        <MenuItem value={10}>Valor 1</MenuItem>
                        <MenuItem value={20}>Valor 2</MenuItem>
                        <MenuItem value={30}>Valor 3</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                </div>

                <div className="w-11/12 m-auto rounded-2xl mb-2 mt-6">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4 py-1 font-Sans font-bold text-base text-onPrimary">Pulso</div>
                    <input className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full" type="text" placeholder="Por ejemplo- 78"/>
                </div>

                <div className="w-11/12 m-auto rounded-2xl mb-2 mt-6">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Tensión arterial</div>
                    <input className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full" type="text" value="120 mmHg"/>
                </div>

                <div className="w-11/12 m-auto rounded-2xl mb-2 mt-6">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Respiración</div>
                    <input className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full" type="text" placeholder="Por ejemplo- 18"/>
                </div>

                <div className="w-11/12 m-auto rounded-2xl mb-2 mt-6">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Frecuencia cardiaca</div>
                    <input className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full" type="text" placeholder="Por ejemplo- 70"/>
                </div>

                <div className="w-11/12 m-auto rounded-2xl mb-2 mt-6">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Temperatura</div>
                    <input className="bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full" type="text" placeholder="Por ejemplo- 36° C"/>
                </div>

                <div className="mt-16">
                <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-primary600 w-8/12 m-auto rounded-xl mb-4 text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-3">Guardar datos</div>
                </div>
            </Link>
            <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-background w-8/12 m-auto rounded-xl mb-8 flex justify-center border-2 border-primary500">
                    <div className="font-Roboto font-medium text-base py-3 text-primary500">Cancelar</div>
                </div>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default EdoPaciente
