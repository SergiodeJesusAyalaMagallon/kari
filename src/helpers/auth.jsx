<<<<<<< HEAD
import axios from 'axios';
import env from 'react-dotenv';

export const googleSignin = (id_token) => {
  return new Promise(
    (resolve, reject) => {
      const data = JSON.stringify({
        "id_token": id_token
      });
    const url = `${env.API_HOST_KARI}/auth/google`;  
    //const url = `https://kari-x.herokuapp.com/api/auth/google`;  
    console.log(env.API_HOST_KARI);
    console.log(env.GOOGLE_CLIENT_ID);
    const config = {
      method: 'post',
      url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then((response) => {
      console.log("STATUS: ", response.status)
      if(response.status === 300){
        console.log('Error sin grupo')
      }else
        resolve(response.data)
    })
    .catch((error) => {
       reject(error)
    });
    }
  )

}


export const getToken = () => {
  return window.localStorage.getItem('x_token');
}

export const setToken = (token) => {
  return window.localStorage.setItem('x_token', token);
}

export const getRefreshToken = () => {
  window.localStorage.getItem('f_token');
}

export const setRefreshToken = (token) => {
  window.localStorage.setItem('f_token', token);
}
export const deleteToken = (token) => {
  window.localStorage.removeItem('f_token');
}
export const deleteRefreshToken = (token) => {
  window.localStorage.removeItem('f_token');
}
=======

import axios from 'axios';

const googleSignIn = async ( idToken ) => {

}
>>>>>>> ef9b214388faf8ff11ed4fb60993d5e99a8d1b35
