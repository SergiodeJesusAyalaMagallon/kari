import { Avatar } from '@material-ui/core'
import React from 'react'

const ContActNombre = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mb-6">
                <Avatar style={{width:"50%",paddingTop:"25%",paddingBottom:"25%",fontSize:"400%"}}>j</Avatar>
            </div>
            <div className="w-10/12 m-auto">
                <div className="bg-primary300 rounded-t-lg w-10/12 pl-4 py-1 font-Sans font-bold text-base text-onPrimary">Nombre</div>
                <div className="bg-background rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400">Juan Javier Rubio</div>
            </div>
                
            
        </div>
    )
}

export default ContActNombre
