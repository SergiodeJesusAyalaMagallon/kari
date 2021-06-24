import React from 'react'

const ContDuracion = () => {
    return (
            <div className="w-10/12 m-auto">
                <div className="bg-primary300 rounded-t-lg w-10/12 pl-4 py-1 font-Sans font-bold text-base text-onPrimary">Duración en horas</div>
                <div className="grid grid-cols-2 bg-onPrimary rounded-2xl rounded-tl-none py-4 pl-4 font-Roboto font-medium text-lg text-primary400 w-full border-2 border-primary300">
                <input type="text" value="24"/> <div className="text-right mr-5 text-primary100" >horas</div>
                </div>
            </div>
    )
}

export default ContDuracion
