import { Avatar, FormControl, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import FooterBasic from './FooterBasic'
import PopGeneral from './PopGeneral'
import { makeStyles } from '@material-ui/core/styles';

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

const AjustesUsuario = ({onClick}) => {
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

    return (
        <div className="mt-40">
            <PopGeneral 
            Header={
                <div>
                    <div className="bg-primary700 rounded-full flex justify-center w-32 m-auto p-2 h-32 -mt-20">
                        <Avatar style={{width:"100%",height:"100%"}}>P</Avatar>
                    </div>
                </div>
            }
            Content={
            <div>
                <div className="bg-primary300 w-10/12 m-auto rounded-full text-center text-lg text-onPrimary font-Roboto font-medium py-1 -mt-10">Patricia Domenech</div>
                <div className="w-10/12 m-auto rounded-2xl mb-2 mt-5">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Turno de trabajo</div>
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
                <div className="w-10/12 m-auto rounded-2xl mb-2 mt-5">
                    <div className="bg-primary300 w-10/12 rounded-t-2xl pl-4  py-1 font-Sans font-bold text-base text-onPrimary">Tipo de miembro</div>
                    <div className="bg-onPrimary rounded-b-2xl rounded-tr-2xl">
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
                        <MenuItem value={10}>Paramedico</MenuItem>
                        <MenuItem value={20}>Encargado de base</MenuItem>
                        <MenuItem value={30}>Administra</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                </div>
                <div className="mt-4 text-onBackground font-Roboto font-medium w-10/12 m-auto text-center tracking-tight">Como administrador Patricia tendría acceso a todos los ajustes e información de la aplicación</div>
            </div>
                }
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Guardar" onClick={onClick}/>}
            Ancho="An9-12"
            Id="Background"
          />
        </div>
    )
}

export default AjustesUsuario
