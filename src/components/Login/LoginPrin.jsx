import React from 'react'
import { LogoKariExtend } from '../../Assets/Icons'
import fondo from '../../Assets/fotoKari.jpeg'
import GoogleLogin from 'react-google-login'
import env from 'react-dotenv'

const LoginPrin = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        <div className="h-screen">
            <div className="bg-gradient-to-t from-primary100 via-primary300 to-primary900 w-full absolute top-0 h-4/6 opacity-60">
                <div className="flex justify-center mt-10">{LogoKariExtend}</div>
            </div>
            
            <section style={{width:"100%",height:"490px", backgroundImage:"url("+fondo+")",backgroundSize: "cover", backgroundPosition:"center"}}/>
            <div className="mt-5 w-6/12 m-auto lg:w-3/12 lg:pl-24">
            <GoogleLogin
            clientId= {env.GOOGLE_CLIENT_ID}
            //clientId= '833106444371-o9q2pmad2nql6ucs2hcm0k3nkdj8a55p.apps.googleusercontent.com'
            buttonText="Acceder con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
            </div>
        </div>
    )
}

export default LoginPrin
