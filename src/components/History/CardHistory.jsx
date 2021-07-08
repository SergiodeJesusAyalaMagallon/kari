import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const CardHistory = ({Icono,Dia,Mes,Año,Titulo,Subtitulo,HoraI,HoraF}) => {
    const classes = useStyles();
    return (
        <div className="w-10/12 lg:w-5/12 m-auto grid grid-cols-12 mb-7">
            <div className="bg-primary700 col-span-3 grid grid-cols-1 rounded-l-2xl">
                <div className="flex justify-center mt-6">{Icono}</div>
                <div className="text-surface font-Sans font-extrabold text-4xl text-center mt-5">{Dia}</div>
                <div className="text-surface font-Sans font-extrabold text-lg text-center -mt-3">{Mes}</div>
                <div className="text-primary400 font-Sans font-extrabold text-lg text-center -mt-3">{Año}</div>
            </div>
            <div className="col-span-9 bg-surface rounded-r-2xl">
                <div className="bg-background mr-3 mt-3 rounded-r-2xl py-1">
                    <div className="text-primary600 text-lg font-bold ml-2 tracking-wider pr-2">{Titulo}</div>
                    <div className="text-onBackground text-sm font-semibold ml-2 tracking-wider pr-2 -mt-1 ">{Subtitulo}</div>
                </div>
                <div className="mt-3 grid grid-cols-2">
                    <div className="col-span-1 pb-3 ml-2">
                    <AvatarGroup >
                        <Avatar className={classes.small}>S</Avatar>
                        <Avatar className={classes.small}>L</Avatar>
                        <Avatar className={classes.small}>R</Avatar>
                        <Avatar className={classes.small}>T</Avatar>
                        <Avatar className={classes.small}>J</Avatar>
                    </AvatarGroup>

                    </div>
                    <div className="text-background font-extrabold text-lg">{HoraI} - {HoraF}</div>
                </div>
                <div className="grid justify-items-end pb-5">
                    <div className="bg-primary200 rounded-l-xl w-7/12">
                        <div className="text-primary800 font-Roboto font-bold text-center py-1">Más detalles</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHistory
