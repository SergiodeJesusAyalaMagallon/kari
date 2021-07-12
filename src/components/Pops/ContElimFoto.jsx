import { Avatar } from '@material-ui/core'
import React from 'react'
import { UseUser } from '../../Context/UserContext'
import { Skeleton } from '@material-ui/lab';

const ContElimFoto = () => {
    const {user, loadUser} = UseUser();
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
            {
                loadUser
                ? <Skeleton variant="circle"/>
                : (
                    user.picture
                    ? <Avatar src={user.picture}/>
                    : <Avatar>{user.name.charAt(0)} </Avatar>
                )
            }
            </div>
        </div>
    )
}

export default ContElimFoto
