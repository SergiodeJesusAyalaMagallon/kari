import React from 'react'
import HourAndMinut from './HourAndMinut'

const SelectHour = ({Id,Header,onClick }) => {
   // console.log(onClick," select hour")
    return (
        <div>
            <div className="w-10/12 md:w-10/12 lg:w-3/12 m-auto mt-16 rounded-2xl bg-onPrimary" id={Id}>
                <div className="py-6 bg-primary700 rounded-2xl rounded-br-none font-Roboto font-bold text-xl text-primary200 flex flex-wrap justify-center items-center">{Header}</div>
                <div className="px-4">
                    <HourAndMinut onClick={onClick} 
                                  onClickNumber={(hour)=> {
                                      console.log("hora ",hour)
                                      } 
                                    }
                                    hora= {"hour"}
                         />
                </div>

            </div>
        </div>
    )
}

export default SelectHour