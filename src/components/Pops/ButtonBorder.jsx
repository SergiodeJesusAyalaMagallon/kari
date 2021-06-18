import React from 'react'

const ButtonBorder = ({Titulo}) => {
    return (
        <div className="border-2 border-secondary500 border-opacity-100 w-10/12 m-auto rounded-xl text-secondary500 flex justify-center">
            <div className="font-Roboto font-medium text-base py-3">{Titulo}</div>
        </div>
    )
}

export default ButtonBorder
