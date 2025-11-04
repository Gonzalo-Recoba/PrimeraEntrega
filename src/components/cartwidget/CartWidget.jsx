import IconPerfil from "../../assets/perfil.png";
import IconLoginFacebook from "../../assets/login_facebook.png";
import IconLoginGoogle from "../../assets/login_google.png";
import IconLoginApple from "../../assets/login_apple.png";
import { useState } from "react";

const CartWidget = () => {
    return (
        <>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModallogin" className="bg-transparent border-0" href="#" >
                <img src={IconPerfil} alt="icono perfil" className='mx-3 perfil' />
            </button>

            <ModalLogin/>
        </>
    )
}
export default CartWidget




const ModalLogin = () => {
    return (
            <div className="modal fade" id="exampleModallogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-login modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="gy-3">
                                        <div className="d-flex justify-content-center mt-3">
                                            <h3>Iniciar sesión</h3>
                                        </div>

                                        <div className="mb-3 form-floating d-flex justify-content-center">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="usuario@dominio.com"/>
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                                        </div>

                                        <div className="mb-3 form-floating d-flex justify-content-center">
                                            <input type="password" className="form-control" id="floatingInput2" placeholder="************"/>
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-skyblue iniciarSesion">Iniciar Sesión</button>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-link ff-rw fw-200 fs-n">¿Olvidó su contraseña?</button>
                                        </div>

                                        <div className="d-flex justify-content-center mt-3">
                                            <h6 className="ff-rw fw-200 fs-n">Iniciar sesión con:</h6>
                                        </div>

                                        <div className="d-flex flex-wrap justify-content-center">
                                            <a href="#"><img src={IconLoginFacebook} alt="icono representativo para iniciar sesión con Facebook" className="w-3 mx-3"/></a>
                                            <a href="#"><img src={IconLoginGoogle} alt="icono representativo para iniciar sesión con Google" className="w-3 mx-3"/></a>
                                            <a href="#"><img src={IconLoginApple} alt="icono representativo para iniciar sesión con Icloud" className="w-3 mx-3"/></a>
                                        </div>

                                        <div className="d-flex justify-content-center mt-5">
                                            <h6 className="text-center ff-rw fw-200 fs-n">No soy usuario registrado y quiero crear una cuenta</h6>
                                        </div>
                                        
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-skyblue registrarse">Registrarse</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
}