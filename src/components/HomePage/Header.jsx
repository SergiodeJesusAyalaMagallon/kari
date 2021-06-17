import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Ubicacion from '@material-ui/icons/PlaceRounded';

const Header = ({Data}) => {
    return (
        <div className="static w-full h-44 bg-primary900 flex justify-center">
            <div className="w-11/12 grid grid-cols-12 my-12">
                <div className="col-span-10 mx-2">
                    <div className="  text-2xl text-background font-Roboto font-bold">Hola, Juan</div>
                    <div className="text-sm text-primary200 font-Sans font-normal"><Ubicacion style={{fontSize:'110%', marginRight:'.5%'}}/>Sahuayo Michoacán</div>
                </div>
                <Avatar>J</Avatar>
            </div>
        </div>
    )
}


export default Header
