import React from 'react'
import {GroupRounded} from '@material-ui/icons';

const HeaderGT = () => {
    return (
        <div className="w-full bg-primary900 flex justify-center">
            <div className="w-3/4 m-auto">
                <div className="w-1/2 m-auto mt-10 flex justify-center text-surface"><GroupRounded style={{fontSize:"500%"}}/></div>
                <div className="w-11/12 text-center m-auto mt-2 text-3xl text-onPrimary font-Roboto font-bold">Grupo de Trabajo</div>
                <div className="w-10/12 text-center m-auto mt-4 mb-10 text-base text-primary300 font-Sans font-normal">Cuerpo de Proteccion Civil Sahuayo Michoacan</div>
            </div>
        </div>
    )
}

export default HeaderGT
