import { Edit } from '@material-ui/icons'
import React from 'react'

const CardHTI = ({Titulo,tiempo,Texto}) => {
    return (
        <div>
            <div className="grid grid-cols-12 w-10/12 m-auto bg-onPrimary rounded-xl mb-14 px-2">
                    <div className="col-span-2 bg-primary700 -m-2 rounded-lg px-1 -mx-5 py-1">
                        <div className="font-Sans font-extrabold text-2xl text-primary200 text-center">{Titulo}</div>
                        <div className="font-Sans font-extrabold text-xs text-primary300 text-center">{tiempo}</div>
                    </div>
                    <div className=" col-span-9  pt-2 pl-7  font-Sans font-bold text-primary300 text-base">{Texto}</div>
                    <div className="bg-secondary300 text-onPrimary rounded-r-lg px-2 py-2 flex flex-wrap justify-center items-center -mr-4">
                        <Edit/>
                    </div>
                </div>
        </div>
    )
}

export default CardHTI
