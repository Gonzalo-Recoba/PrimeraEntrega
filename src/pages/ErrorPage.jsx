import React from 'react'
import image404 from '../assets/error404.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container my-5 mx-auto text-center"> 
            <Link to="/">
              <img src={image404} className="w-50" alt="Error 404, página en mantenimiento."/>
            </Link>
    </div>
  )
}

export default ErrorPage