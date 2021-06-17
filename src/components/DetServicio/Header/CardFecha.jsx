import React from 'react'

const CardFecha = () => {
    return (
        <div>
            <div className="w-10/12 h-37 m-auto rounded-3xl bg-surface grid grid-cols-12">
            <div className="w-11/12 bg-primary700 col-span-4 rounded-tl-3xl  rounded-bl-3xl font-Sans font-extrabold">
                <div className="w-11/12 text-surface  flex justify-center text-4xl tracking-tighter mt-12" >
                    12
                </div>
                <div className="w-11/12 text-surface flex justify-center text-lg -my-2" >
                    JUN
                </div>
                <div className="w-11/12 text-primary400 flex justify-center text-lg mb-12" >
                    2021
                </div>
            </div>
            <div className="col-span-7 -ml-2">
                <div className="bg-background rounded-br-2xl rounded-tr-2xl tracking-wide my-5">
                    <div className="pl-2 pt-1 font-Sans font-extrabold text-base text-primary200">Folio SUMICH:</div>
                    <div className="pl-2 pb-1 font-Sans font-medium text-xl text-primary400">185134MIC</div>
                </div>
                <div className="bg-background rounded-br-2xl rounded-tr-2xl tracking-wide my-5 w-11/12">
                    <div className="pl-2 pt-1 font-Sans font-extrabold text-base text-primary200">Folio C5i:</div>
                    <div className="pl-2 pb-1 font-Sans font-medium text-xl text-primary400">147E5248A</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardFecha
