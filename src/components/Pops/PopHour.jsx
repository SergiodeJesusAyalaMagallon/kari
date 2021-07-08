import React from 'react'
import ContHourEntrada from './ContHourEntrada'

const PopHour = ({Header,Footer,Id}) => {
    return (
        <div className="w-10/12 md:w-10/12 lg:w-3/12 m-auto mt-16 rounded-2xl bg-onPrimary" id={Id}>
            <div className="py-6 bg-primary700 rounded-2xl rounded-br-none font-Roboto font-bold text-xl text-primary200 flex flex-wrap justify-center items-center">{Header}</div>
            <div className="py-6"><ContHourEntrada /></div>
            <div className="bg-background rounded-b-2xl flex flex-wrap justify-center items-center py-6">{Footer}</div>
        </div>
    )
}

export default PopHour