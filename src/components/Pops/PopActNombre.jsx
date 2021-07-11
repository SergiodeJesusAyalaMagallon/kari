import React, { useState, useEffect } from 'react'
import PopGeneral from './PopGeneral';
import FooterBasic from './FooterBasic'
import HeaderBasic from './HeaderBasic'
import ContActNombre from './ContActNombre';
import { UseNameChange } from '../../hooks/users/useNameChange'



const PopActNombre = ({onClick}) => {
    const [name, setName] = useState(`${window.localStorage.getItem('user')}`);
    const [send, setSend] = useState(null);
    const response = UseNameChange(send);
    const pattern = new RegExp('[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$', 'g');

    const handleAccept = () => {
        if( !name || name.trim().length < 4 ){
            window.alert("Se debe agregar un nombre de al menos 4 caracteres");
        }else if( !pattern.test(name.trim())){
            window.alert("El nombre solo puede tener letras");
        }else{
            console.log("Haciendo petición...");
            setSend( name );
        }
    }

    useEffect(() => {
        console.log(response);
        if(response.error){ 
            //Ocurrio error y hay que notificara al usuario
        }else{
            window.localStorage.setItem('user', response.data.name );
            onClick();
        }
        
    }, [response])

    return (
        <div className="mt-32">
            <PopGeneral 
            Header={<HeaderBasic Titulo="Actualiza tu nombre"/>}
            Content={<ContActNombre name={name} setName={setName} />}
            Footer={<FooterBasic Boton1="Cancelar" Boton2="Guardar" onClick={onClick} onClick2={handleAccept}/>}
            />
        </div>
    )
}

export default PopActNombre
