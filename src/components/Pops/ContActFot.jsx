import { Avatar } from '@material-ui/core'
import React from 'react'
import Button from '../DetServicio/Button'
import ButtonBorder from './ButtonBorder'

const ContActFot = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
                <Avatar style={{width:"65%",paddingTop:"30%",paddingBottom:"30%",fontSize:"500%"}}>j</Avatar>
            </div>
            <Button Titulo="Subir foto"/>
            <ButtonBorder Titulo="Borrar foto de perfil"/>
        </div>
    )
}

export default ContActFot
