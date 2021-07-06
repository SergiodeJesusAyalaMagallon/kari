import { Avatar, Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'


const LabelPer = ({nombre,avatar}) =>{
    return(
        <div className="bg-background w-56 grid grid-cols-12 ">
            <div className="col-span-11 text-primary600 font-Roboto font-medium flex flex-wrap items-center pl-4">{nombre}</div>
            <div className="col-span-1"><Avatar>{avatar}</Avatar></div>
        </div>
    )
}

const SelectorMiembros = ({Header,btn2,onClick}) => {

    const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { Juan } = state;

    return (
        <div className="mt-20">
            <PopGeneral 
            Header={<HeaderBasic Titulo={Header}/>}
            Content={
            <div className="h-96 overflow-scroll">
                <div className="text-onBackground font-Roboto font-bold text-lg text-center mb-4">En turno actual</div>
                    <div>
                        <FormControl component="fieldset" className="w-full">
                            <FormGroup className="ml-7">
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            </FormGroup>
                        </FormControl>
                    </div>
                <div className="text-onBackground font-Roboto font-bold text-lg text-center mb-4">Otros paramedicos</div>
                <div>
                        <FormControl component="fieldset" className="w-full">
                            <FormGroup className="ml-7">
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Juan} onChange={handleChange} name="gilad"/>}
                                label={<LabelPer nombre="Juan Javier Rubio" avatar="J"/>}
                                className="bg-background w-10/12 m-auto px-2 rounded-xl mb-4"
                            />
                            </FormGroup>
                        </FormControl>
                    </div>
            </div>
            }
            Footer={<FooterBasic Boton1="Cancelar" Boton2={btn2} onClick={onClick}/>}
            Ancho="An8-12"
          />
        </div>
    )
}

export default SelectorMiembros
