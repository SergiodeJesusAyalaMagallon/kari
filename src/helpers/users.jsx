import axios from 'axios';
import env from 'react-dotenv';
import { getToken } from './auth'

export const setUserName = (name) => {
    return new Promise(
      (resolve, reject) => {
        const data = JSON.stringify({
          "name": name
        });
        
        const config = {
          method: 'put',
          url: `${env.API_HOST_KARI}/users/current`,
          headers: { 
            'x-token': getToken(), 
            'Content-Type': 'application/json'
          },
          data
        };
      
        axios(config)
        .then( (response) => {
          if(response.status !== 200 || response.statis !== 201)
            reject(response.data);
          else
            resolve(response.data);
        })
        .catch( (error) => {
          console.log(error);
          reject(error);
        });
      }
    )
}


export const getCurrentUser = () => {
  return new Promise(
    (resolve, reject) => {
      
      const config = {
        method: 'get',
        url: `${env.API_HOST_KARI}/users/current`,
        headers: { 
          'x-token': getToken(), 
          'Content-Type': 'application/json'
        }
      };
    
      axios(config)
      .then( (response) => {
        resolve(response.data);
        // if(response.status !== 200 || response.statis !== 201)
        //   reject(response.data);
        // else
        //   resolve(response.data);
      })
      .catch( (error) => {
        console.log(error);
        reject(error);
      });
    }
  )
}
