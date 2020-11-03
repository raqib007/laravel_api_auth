import React from 'react';
import {Redirect, Route} from "react-router-dom";
import auth from './auth/Auth';

const PrivateRoute = ({component:Component,...rest}) =>{
  return(
      <Route {...rest} render={props=>{
          if(auth.isAuthenticated()){
              return <Component {...props}/>
          }else{
              return <Redirect
                 to={{
                     pathname:'/login',
                     state:{
                         from:props.pathname
                     }
                 }}
              />
          }
      }} />
  )
};

export default PrivateRoute;
