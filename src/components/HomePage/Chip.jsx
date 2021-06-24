import React from 'react'

const Chip = ({Titulo,modo}) => {
    return (
            <div className="w-4/12 font-Sans h-9 font-normal text-sm rounded-full flex justify-center items-center m-2 tracking-tighter px-3" id={modo}>
                {Titulo}
            </div>
    )
}

export default Chip
