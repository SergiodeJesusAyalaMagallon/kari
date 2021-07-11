import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Ubicacion from '@material-ui/icons/PlaceRounded';
import { UseUser } from '../../Context/UserContext'
import { Skeleton } from '@material-ui/lab';


const Header = ({Data}) => {
    const {user, loadUser} = UseUser();
    return (
        <div className="static w-full h-44 bg-primary900 flex justify-center">
        <div className="w-11/12 lg:w-10/12 grid grid-cols-12 my-12 lg:ml-24">
            <div className="col-span-10 mx-2">
                {loadUser 
                    ? <Skeleton variant="text"/>
                    : <div className="  text-2xl text-background font-Roboto font-bold">{`Hola, ${user.name.split(' ')[0]}`}</div>
                }
                <div className="text-sm text-primary200 font-Sans font-normal"><Ubicacion style={{fontSize:'110%', marginRight:'.5%'}}/>Sahuayo Michoacán</div>
            </div>
            {
                loadUser
                ? <Skeleton variant="circle"/>
                : (
                    localStorage.getItem('picture') 
                    ? <Avatar src={user.picture}/>
                    : <Avatar>{user.name.charAt(0)} </Avatar>
                )
            }
        </div>
    </div>
    )
}


export default Header
