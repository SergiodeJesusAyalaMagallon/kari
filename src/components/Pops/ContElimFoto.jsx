import { Avatar } from '@material-ui/core'
import React from 'react'

const ContElimFoto = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
            {
                    localStorage.getItem('picture') 
                    ? <Avatar style={{width:"50%",height:"50%",}} src={localStorage.getItem('picture')}/>
                    : <Avatar style={{width:"50%",height:"50%",}}>{window.localStorage.getItem('user').charAt(0)} </Avatar>
                }
            </div>
        </div>
    )
}

export default ContElimFoto
