import React from 'react';
import GoogleLogin from 'react-google-login';
import {Button} from "antd"
// or
// import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response):any => {
  console.log(response);
  return(
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      render={renderProps => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google Button</Button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default responseGoogle