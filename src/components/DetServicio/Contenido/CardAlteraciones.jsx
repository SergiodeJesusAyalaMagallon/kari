import React from 'react'

const CardAlteraciones = () => {
    return (
        <div className="bg-background m-auto w-11/12 rounded-2xl mb-7">
            <div className="pl-3 py-2">
                <div className="text-base text-primary200 font-Sans font-extrabold tracking-wide ml-2">Alteraciones</div>
                <div className="grid grid-cols-12 bg-onPrimary w-11/12 rounded-r-xl mt-2 ml-2">
                    <div className="col-span-2 -ml-2 w-9/12 bg-primary300 text-onPrimary rounded-full font-Sans font-extrabold text-lg text-center">1</div>
                    <div className="text-primary400 font-Roboto font-medium text-base py-1 -ml-2">Fractura</div>
                </div>
                <div className="grid grid-cols-12 bg-onPrimary w-11/12 rounded-r-xl mt-4 ml-2">
                    <div className="col-span-2 -ml-2 w-9/12 bg-primary300 text-onPrimary rounded-full font-Sans font-extrabold text-lg text-center">2</div>
                    <div className="text-primary400 font-Roboto font-medium text-base py-1 -ml-2">Hemorragia</div>
                </div>
            </div>
        </div>
    )
}

export default CardAlteraciones
