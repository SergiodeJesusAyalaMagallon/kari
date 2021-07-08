import React from 'react'
import GoogleLogin from 'react-google-login'

const Login2 = () => {

    const responseGoogle = (response) => {
        console.log(response);
      }

    return (
        <div>
            <GoogleLogin
            clientId= '833106444371-o9q2pmad2nql6ucs2hcm0k3nkdj8a55p.apps.googleusercontent.com'
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login2
