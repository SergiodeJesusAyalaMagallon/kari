import { AssessmentRounded } from '@material-ui/icons'
import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const LabelPer = ({nombre}) =>{
    return(
        <div className="bg-surface w-full py-4 rounded-xl">
            <div className="text-primary300 font-Roboto font-medium flex flex-wrap items-center pr-2 tracking-tighter">{nombre}</div>
        </div>
    )
}

const ClasDiagnostica = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
        });
    
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
    
        const { Poblacion } = state;
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="w-11/12 m-auto">
                    <div className=" m-auto mt-8 flex justify-center text-primary200"><AssessmentRounded style={{fontSize:"500%"}}/></div>
                    <div className="w-full text-center m-auto mt-2 text-3xl text-primary500 font-Roboto font-bold">Clasificación diagnóstica</div>
                    <div className="w-8/12 text-center m-auto mt-2 mb-5 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
                </div>
            </div>
            <div className="overflow-scroll w-11/12 lg:w-5/12 m-auto" style={{height:"470px"}}>
            <FormControl component="fieldset" className="w-full m-auto">
                            <FormGroup className="mx-11 w-full">
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="I. Ciertas enfermedades infecciosas y parasitarias (A00–B99)"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="II. Tumores [neoplasias] (C00–D48)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="III. Enfermedades de la sangre y de los organos hematopoyeticos, y ciertos trastornos que afectan el mecanismo de la inmunidad (D50–D89)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="IV. Enfermedades endocrinas, nutricionales y metabolicas (E00–E90)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="V. Trastornos mentales y del comportamiento (F00-F99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="VI. Enfermedades del sistema nervioso (G00-G99)"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="VII. Enfermedades del ojo y sus anexos (H00–H59)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="VIII. Enfermedades del oido y de la apofisis mastoides (H60–H95)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="IX. Enfermedades del sistema circulatorio (I00–I99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="X. Enfermedades del sistema respiratorio (J00–J99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="XI: Enfermedades del aparato digestivo (K00-K93)"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="XII. Enfermedades de la piel y del tejido subcutaneo (L00–L99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="XIII Enfermedades del sistema osteomuscular y del tejido conjuntivo (M00–M99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="XIV. Enfermedades del sistema genitourinario (N00–N99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="XV. Embarazo, parto y puerperio (O00–O99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="ayuntamiento"/>}
                                label={<LabelPer nombre="XVI. Ciertas afecciones originadas en el periodo perinatal (P00–P96)"/>}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="C5i"/>}
                                label={<LabelPer nombre="XVII. Malformaciones congenitas, deformidades y anomalias cromosomicas (Q00–Q99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="CRUM"/>}
                                label={<LabelPer nombre="XVIII. Sintomas, signos y hallazgos anormales clinicos y de laboratorio, no clasificados en otra parte (R00–R99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="XIX. Traumatismos, envenenamientos y algunas otras consecuencias de causas externas (S00–T98)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="XX. Causas externas de morbilidad y de mortalidad (V01–Y98)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={<LabelPer nombre="XXI. Factores que influyen en el estado de salud y contacto con los servicios de salud (Z00–Z99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={<LabelPer nombre="XXII. Codigos para propositos especiales (U00–U99)" />}
                                className="bg-surface w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={
                                <div className="bg-secondary200 w-full py-4 rounded-xl">
                                    <div className="text-secondary800 font-Roboto font-medium flex flex-wrap items-center pl-4 tracking-tighter">Cancelado</div>
                                </div>
                                }
                                className="bg-secondary200 w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Hospital"/>}
                                label={
                                <div className="bg-secondary200 w-full py-4 rounded-xl">
                                    <div className="text-secondary800 font-Roboto font-medium flex flex-wrap items-center pl-4 tracking-tighter">No aplica</div>
                                </div>
                                }
                                className="bg-secondary200 w-11/12 m-auto pl-2 rounded-xl mb-4"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={Poblacion} onChange={handleChange} name="Poblacion"/>}
                                label={
                                <div className="bg-secondary200 w-full py-4 rounded-xl">
                                    <div className="text-secondary800 font-Roboto font-medium flex flex-wrap items-center pl-4 tracking-tighter">Sin lesiones</div>
                                </div>
                                }
                                className="bg-secondary200 w-11/12 m-auto pl-2 rounded-xl mb-20"
                            />
                            </FormGroup>
                        </FormControl>
            </div>
            <div className="absolute bottom-0 w-full bg-background">
                <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-primary600 w-8/12 lg:w-3/12 m-auto rounded-xl mb-2 mt-6 text-onPrimary flex justify-center">
                    <div className="font-Roboto font-medium text-base py-2">Guardar datos</div>
                </div>
            </Link>
            <Link
                    component = {RouterLink}
                    to = "/DetServicio"
                >  
                <div className="bg-background w-8/12 lg:w-3/12 m-auto rounded-xl mb-4 flex justify-center border-2 border-primary500">
                    <div className="font-Roboto font-medium text-base py-2 text-primary500">Cancelar</div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default ClasDiagnostica
