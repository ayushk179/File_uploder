import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

 
function Privateroute() {
    var user=false;
    user=window.localStorage.loggedIn;
  return (
      user?<Outlet/>:<Navigate to='/sign-in'/>
  )
}

export default Privateroute