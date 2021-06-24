import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles';

const IOSSwitch = withStyles((theme) => ({
   root: {
     width: 42,
     height: 26,
     padding: 0,
     margin: theme.spacing(1),
   },
   switchBase: {
     padding: 1,
     '&$checked': {
       transform: 'translateX(16px)',
       color: `#E9E8F5`,
       '& + $track': {
         backgroundColor: '#7B79C5',
         opacity: 1,
         border: 'none',
       },
     },
     '&$focusVisible $thumb': {
       color: '#7B79C5',
       border: '6px solid #D1CFE5',
     },
   },
   thumb: {
     width: 24,
     height: 24,
   },
   track: {
     borderRadius: 26 / 2,
     border: `1px solid ${theme.palette.grey[400]}`,
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
   return (
       <div className="w-10/12 m-auto">
           <div className="grid grid-cols-12">

             <div className=" col-span-5 bg-background rounded-xl font-Sans font-bold text-lg text-primary600 py-2 px-4 flex flex-wrap justify-center items-center"><button type="button" >08</button></div>
             <div className=" col-span-1 ont-Sans font-bold text-lg text-primary600">:</div>
             <div className="col-span-5  bg-background rounded-xl font-Sans font-bold text-lg text-primary600 py-2 px-4 flex flex-wrap justify-center items-center"><button type="button" >00</button></div>

           </div>
           <div>
            <FormControlLabel
                control={<IOSSwitch name="checkedB" />}
                label=""
                />
           </div>   
       </div>
   )
}
export default ContHourEntrada