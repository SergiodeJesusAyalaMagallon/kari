import React from'react'
import ButtonHM from './ButtonHM'


const hour = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];
const minut = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
               "25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50",
                "51","52","53","54","55","56","57","58","59","60"];

const renderButtons = (onClickNumber,onClick,hora)  =>{
      console.log(onClick,"on click close Hour adn mint")
    const renderButton = number => (
        <ButtonHM
        key = {number}
        text = {number.toString()}

         onClickHandler={onClickNumber}
         
         onClick={onClick}
        />
    )
    if(hora === 'hour'){
        return hour.map(renderButton)
    }else if( hora === 'minuts'){
        return minut.map(renderButton)
    }
    //return hourOrMin.map(renderButton)
}

const HourAndMinut =({onClick,onClickNumber,hora})=>(
    <section className="justify-center items-center h-96 overflow-scroll">
        {renderButtons(onClickNumber,onClick,hora)} 
    </section>

)

export default HourAndMinut