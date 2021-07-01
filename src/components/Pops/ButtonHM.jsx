import React from 'react'


const ButtonHM = ({type,text, onClickHandler,onClick}) =>{
   // console.log(onClick,"button hm")
    return (
        <button  onClick={onClick}  className="rounded-lg my-2  bg-background w-full h-12"> 
             <button className= " font-Sans text-3xl font-extrabold text-primary300  "
                onClick= {() =>{
                  console.log("dentro del click")
                   onClickHandler(text)
             }}>
        
           <span>{text}   </span>
          
         </button>
       </button> 

    )
}

export default ButtonHM