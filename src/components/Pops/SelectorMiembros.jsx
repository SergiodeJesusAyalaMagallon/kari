import { Avatar, FormControl, FormGroup } from '@material-ui/core'
import React from 'react'
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import PopGeneral from './PopGeneral'


const SelectorMiembros = ({Header,btn2,onClick}) => {

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
                            
                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option1" name="option1" type="checkbox" className="input"/>
                                <label for="option1" className="label w-72 rounded-3xl text-center mb-4">Juan Javier Rubio</label>
                            </div>
                            </div>

                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option2" name="option1" type="checkbox" className="input"/>
                                <label for="option2" className="label w-72 rounded-3xl text-center mb-4">Lorem ipsum dolor sit</label>
                            </div>
                            </div>

                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option3" name="option1" type="checkbox" className="input"/>
                                <label for="option3" className="label w-72 rounded-3xl text-center mb-4">Lorem ipsum dolor sit</label>
                            </div>
                            </div>
                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option4" name="option1" type="checkbox" className="input"/>
                                <label for="option4" className="label w-72 rounded-3xl text-center mb-4">Lorem ipsum dolor sit</label>
                            </div>
                            </div>
                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option5" name="option1" type="checkbox" className="input"/>
                                <label for="option5" className="label w-72 rounded-3xl text-center mb-4">Lorem ipsum dolor sit</label>
                            </div>
                            </div>

                            </FormGroup>
                        </FormControl>
                    </div>
                <div className="text-onBackground font-Roboto font-bold text-lg text-center mb-4">Otros paramedicos</div>
                <div>
                        <FormControl component="fieldset" className="w-full">
                            <FormGroup className="ml-7">
                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option6" name="option1" type="checkbox" className="input"/>
                                <label for="option6" className="label w-72 rounded-3xl text-center mb-4">Juan Javier Rubio</label>
                            </div>
                            </div>

                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option7" name="option1" type="checkbox" className="input"/>
                                <label for="option7" className="label w-72 rounded-3xl text-center mb-4">Lorem ipsum dolor sit</label>
                            </div>
                            </div>

                            <div className="flex">
                                <Avatar className="avatar">J</Avatar>
                                <div className="inputGroup -ml-10">
                                <input id="option8" name="option1" type="checkbox" className="input"/>
                                <label for="option8" className="label w-72 rounded-3xl text-center mb-4">Lorem ipsum dolor sit</label>
                            </div>
                            </div>
                           
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
