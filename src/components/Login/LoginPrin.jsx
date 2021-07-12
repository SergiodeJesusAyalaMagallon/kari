import React, {useState, useEffect } from 'react'
import { LogoKariExtend } from '../../Assets/Icons'
import fondo from '../../Assets/fotoKari.jpeg'
import GoogleLogin from 'react-google-login'
import env from 'react-dotenv'
import { getCurrentUser } from '../../helpers/users'
import  { Redirect, Router } from 'react-router-dom'
import { UseUser } from '../../Context/UserContext'

const LoginPrin = () => {
    const [state, setState] = useState(null);

    const { login } = UseUser();

    const responseGoogle = (response) => {
        console.log(response);
    }

      
    return (
        <div className="h-screen flex justify-center">
            {/* <div className="bg-gradient-to-t from-primary100 via-primary300 to-primary900 w-full absolute top-0 h-4/6 opacity-60">
                <div className="flex justify-center mt-10">{LogoKariExtend}</div>
            </div> */}
            <div className="w-full lg:w-1/2 h-80 ">
            <section className='imageLogin' style={{width:"100%",height:"490px", backgroundImage:"url("+fondo+")",backgroundSize: "cover"}}>
                <div className="flex justify-center mt-10">{LogoKariExtend}</div>
            </section>
            <div className="mt-5 w-6/12 m-auto lg:w-6/12 lg:pl-24">
                <GoogleLogin
                clientId= {env.GOOGLE_CLIENT_ID}
                //clientId= '833106444371-o9q2pmad2nql6ucs2hcm0k3nkdj8a55p.apps.googleusercontent.com'
                buttonText="Acceder con Google"
                onSuccess={ (response) => {
                    login(response.tokenId)
                    setState(true);
                }}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
            </div>
            {state && <Redirect to={'/home'}/>}
        </div>
        
    )
}

export default LoginPrin
