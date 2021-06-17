import React from 'react'
import  Flecha from '@material-ui/icons/ArrowForwardIosRounded'

const CardNoti = ({titulo,Icono,texto,id}) => {
    return (
        <div className="w-10/12 m-auto rounded-lg  bg-onPrimary grid grid-cols-12 mb-7 text-secondary400" id={id}>
                <div className="col-span-2  flex items-center justify-center" >
                    <Icono style={{fontSize:'250%',marginLeft:'20%'}}/>
                </div>
            <div className="col-span-9 mt-3 mx-4 w-10/12">
                <div className=" text-primary500 font-Roboto font-bold text-base text-left leading-tight tracking-wide">
                    {titulo}
                </div>
                <div className="text-primary300 font-Sans font-normal text-sm text-left leading-tight tracking-wide mt-2 mb-2">
                    {texto}
                </div>
            </div>
            <div className="text-primary500 my-auto">
                <Flecha style={{fontSize:'200%',marginLeft:'-45%'}}/>
            </div>
        </div>
    )
}

export default CardNoti
