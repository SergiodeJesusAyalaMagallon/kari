import React from 'react'

const FooterBasic = ({Boton1,Boton2,onClick,onClick2}) => {
    return (
        <div className="grid grid-cols-12">
            <div className="border-2 border-primary600 border-opacity-100 col-span-6 mx-2  rounded-xl font-Roboto font-medium text-lg text-primary500 py-1 px-4 flex flex-wrap justify-center items-center"><button type="button" onClick={onClick}>{Boton1}</button></div>
            <div className=" col-span-6 mx-2 bg-primary600 rounded-xl font-Roboto font-medium text-lg text-onPrimary py-2 px-4 flex flex-wrap justify-center items-center"><button type="button" onClick={onClick2}>{Boton2}</button></div>
        </div>
    )
}

export default FooterBasic
