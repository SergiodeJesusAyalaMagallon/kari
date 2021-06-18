import React from 'react'

const PopGeneral = ({Header,Content,Footer}) => {
    return (
        <div className="w-10/12 m-auto rounded-2xl bg-onPrimary">
            <div className="py-6 bg-primary700 rounded-2xl rounded-br-none font-Roboto font-bold text-xl text-primary200 flex flex-wrap justify-center items-center">{Header}</div>
            <div className="py-6"><Content/></div>
            <div className="bg-background rounded-b-2xl flex flex-wrap justify-center items-center py-6">{Footer}</div>
        </div>
    )
}

export default PopGeneral
