import React from 'react'

const Button = ({Titulo, onClick }) =>{
    return(
        <div className="bg-secondary300 w-10/12 lg:w-5/12 m-auto rounded-xl mb-6 text-onPrimary flex justify-center" onClick={onClick}>
            <div className="font-Roboto font-medium text-base py-3">{Titulo}</div>
        </div>

    )
}

export default Button