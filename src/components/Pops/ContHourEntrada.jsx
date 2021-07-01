import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SelectHour from './SelectHour'
import SelectMin from './SelectMin'

const IOSSwitch = withStyles((theme) => ({
   root: {
     width: 120,
     height: 60,
     padding: 0,
     margin: theme.spacing(2),
   },
   switchBase: {   //cambio de switch color transicion
     padding: 1,
     '&$checked': {
       transform: 'translateX(60px)',
       color: `#7B79C5`,
       '& + $track': {
         backgroundColor: '#D1CFE5',
         opacity: 1,
         border: 'none',
       },
     },
     '&$focusVisible $thumb': {
       color: '#D1CFE5',
       border: '6px solid #D1CFE5',
     },
   },
   thumb: {
     width: 60,
     height: 60,
     borderRadius: 20 / 2,
     color: '#7B79C5',
   },
   track: {
     borderRadius: 20 / 2,
     border: `1px solid #D1CFE5`,
     backgroundColor: `#D1CFE5`,
     opacity: 1,
     transition: theme.transitions.create(['background-color', 'border']),
   },
   checked: {},
   focusVisible: {},
 }))(({ classes, ...props }) => {
   return (
     <Switch
       focusVisibleClassName={classes.focusVisible}
       disableRipple
       classes={{
         root: classes.root,
         switchBase: classes.switchBase,
         thumb: classes.thumb,
         track: classes.track,
         checked: classes.checked,
       }}
       {...props}
     />
   );
 });

const ContHourEntrada = () =>{
  const [open, setOpen] = React.useState(false);

    const handleOpenHourS = () => {
        setOpen(true);
    };
    
    const handleCloseHourS = () => {
        setOpen(false);
    };
    const body = (
        <SelectHour Header={"Hora de entrada (Turno 1)"} onClick={handleCloseHourS}/>
    );

    const [open2, setOpen2] = React.useState(false);

    const handleOpenMinS = () => {
        setOpen2(true);
    };
    
    const handleCloseMinS = () => {
        setOpen2(false);
    };
    const body2 = (
        <SelectMin Header={"Minuto de entrada (Turno 1)"} onClick={handleCloseMinS}/>
    );

   return (
       <div className="w-10/12 m-auto">
           <div className="grid grid-cols-12 font-Sans font-extrabold text-7xl text-primary700 tracking-widest m-auto">

             <div className=" col-span-5 bg-background rounded-xl py-8 px-4 flex flex-wrap justify-center items-center"><button type="button" onClick={handleOpenHourS} > 08 </button></div>
             <div className=" col-span-2 font-Sans font-extrabold text-5xl text-primary600 flex flex-wrap justify-center items-center">:</div>
             <div className="col-span-5  bg-background rounded-xl  py-8 px-4 flex flex-wrap justify-center items-center"><button type="button" onClick={handleOpenMinS}> 00 </button></div>

           </div>
           <Modal  ///seleccionar hora
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>

            <Modal  ///seleccionar minito
                open={open2}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body2}
            </Modal>


           <div className=" flex flex-wrap  justify-center items-cente w-6/12 m-auto">
              <FormControlLabel
                control={<IOSSwitch name="checkedB" />} 
                />
           </div> 
           <div  className="absolute justify-center items-center grid grid-cols-2 -mt-16 ml-16">
                   <div className="ml-3 mt-1  font-Sans font-extrabold text-2xl text-onPrimary ">AM</div>
                   <div className="ml-4 mt-1 font-Sans font-extrabold text-2xl text-onPrimary ">PM</div>

                </div>  
       </div>
   )
}
export default ContHourEntrada