import React from 'react'
import { EventRounded } from '@material-ui/icons'
import FooterBasic from './FooterBasic'
import PopGeneral from './PopGeneral'
import { Modal } from '@material-ui/core'
import FechaSig from './FechaSig'

const PopFechIF = ({onClick}) =>{
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <FechaSig onClick={handleClose}/>
    );



    return (
        <div> 
             <PopGeneral
                Header={
                <div className="grid grid-cols-12">
                    <div className=" col-span-4 grid grid-cols-1 rounded-l-2xl justify-items-center">
                       <div className="text-primary100 font-Sans font-extrabold text-5xl text-center mt-5">01</div>
                       <div className="text-primary100 font-Sans font-extrabold text-xl text-center -mt-1">MAR</div>
                       <div className="text-primary300 font-Sans font-extrabold text-xl text-center -mt-1">2021</div>
                    </div>
                    <div className=" col-span-4 grid grid-cols-1 rounded-l-2xl w-full">
                       <div className="bg-primary400 text-primary400 font-Sans w-6/12 m-auto font-extrabold h-2 rounded-full text-center mt-16"></div>
                     </div>  
                     <div className=" col-span-4 grid grid-cols-1 rounded-l-2xl">
                        <div className="text-primary100 font-Sans font-extrabold text-5xl text-center mt-5">31</div>
                        <div className="text-primary100 font-Sans font-extrabold text-xl text-center -mt-1">Mar</div>
                        <div className="text-primary300 font-Sans font-extrabold text-xl text-center -mt-1">2021</div>
                    </div>
                </div>}
                Content={
                    <div>
                            
                        <div className="grid grid-cols-2">
                             <div className="w-10/12 m-auto text-center rounded-lg mb-2 bg-primary200 font-Roboto text-primary800 font-bold -mr-1"  > <button> Últimos 7 días </button></div>

                             <div className="w-10/12 m-auto text-center rounded-lg mb-2 bg-primary200 font-Roboto text-primary800 font-bold "><button> Últimos 30 días  </button></div>

                            <div className="w-10/12 m-auto text-center rounded-lg mb-2 bg-primary200 font-Roboto text-primary800 font-bold -mr-1"><button> Mes actual </button></div>
                            <div className="w-10/12 m-auto text-center rounded-lg mb-2 bg-primary200 font-Roboto text-primary800 font-bold "><button> Mes pasado </button></div>
                             
                        </div>
                        <button type="button" onClick={handleOpen} className="w-full">
                        <div className="w-10/12 m-auto mt-10 mb-4">
                            <div className="text-primary500 font-Roboto font-bold text-xl">Fecha Inicial:</div>
                            <div className="bg-onPrimary py-2 rounded-lg mt-2 text-primary300 font-semibold grid grid-cols-12">
                               <div className="col-span-10 text-left ml-5"> 01 de marzo 2021 </div>
                                   <div><EventRounded/></div>
                            </div>
                        </div>
                        </button>
                            <Modal
                                open={open}
                            >
                            {body}
                            </Modal>
                            <button type="button" onClick={handleOpen} className="w-full">
                            <div className="w-10/12 m-auto">
                            <div className="text-primary500 font-Roboto font-bold text-xl">Fecha Final:</div>
                            <div className="bg-onPrimary py-2 rounded-lg mt-2 text-primary300 font-semibold grid grid-cols-12">
                               <div className="col-span-10 text-left ml-5"> 31 de marzo 2021 </div>
                                   <div><EventRounded/></div>
                            </div>
                        </div>
                                </button>
                            <Modal
                                open={open}
                            >
                            {body}
                            </Modal>
                        


                        


                    </div>
                }
                Footer={<FooterBasic Boton1="Cancelar" Boton2="Aceptar" onClick={onClick} />}
                Id="Background"
            />
          </div>
    )
}
  
export default PopFechIF