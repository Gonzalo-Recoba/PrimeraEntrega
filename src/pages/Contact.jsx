import React from 'react'

const Contact = () => {
  return (
          <div className="container pt-3">
              <h1 className="tituloPrincipal mb-3 text-center">Contáctanos</h1>
              <div className="row">
                  <form className="wow col-lg-6 mb-3 animate__backInLeft wow">
                      <div className="d-flex justify-content-center mt-3">
                          <h3>Formulario de contacto</h3>
                      </div>    
                      <div className="form-floating mb-3 mx-auto w-60">
                          <input type="text" name="Nombre completo form" id="nombre" className="form_respuesta form-control" placeholder="Juan Pérez" required/>
                          <label htmlFor="nombre" className="form_nombre form">Nombre:</label>
                      </div>
                      <div className="form-floating mb-3 mx-auto w-60">
                          <input type="email" name="email" id="email" className="form_respuesta form-control" placeholder="usuario@dominio.com" required/>
                          <label htmlFor="email" className="form_email form">Correo Electrónico:</label>
                      </div>
                      <div className="form-floating mb-3 mx-auto w-60">
                          <input type="tel" name="Número" id="Número" className="form_respuesta form-control" placeholder="09*******" required/>
                          <label htmlFor="Teléfono" className="form_numero form">Número de celular</label>
                      </div>
                      <div className="form-floating mx-auto w-60">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                          <label htmlFor="floatingTextarea">Consulta</label>
                      </div>
                      <div className="mb-3 mx-auto w-60">
                          <label htmlFor="formFile" className="form-label"></label>
                          <input className="form-control" type="file" id="formFile"/>
                      </div>                
                      <div className="w-50 mb-3 mx-auto d-flex justify-content-between">
                          <button className="btn w-40">Enviar</button>
                          <button className="btn w-40">Borrar datos</button>
                      </div>
                  </form>
                  <div className="card wow pb-2 col-lg-6 wow animate__backInRight">
                      <div className="card-body">
                          <div className="card w-100" >
                          <div className="card-header text-center">
                              Contacto
                          </div>
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item">Lunes a viernes de 9:00 a 18:00 horas</li>
                              <li className="list-group-item">18 de Julio 1513, esq. Tacuarembó</li>
                              <li className="list-group-item">Montevideo, Uruguay. C.P. 15800</li>
                              <li className="list-group-item">2698 1513</li>
                          </ul>
                          </div>
                      </div>
                      <div className="ratio ratio-21x9 px-3">
                          <iframe className="mapa px-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.00923595911485!2d-56.183036171680946!3d-34.904595232693595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cae9a3b6f5%3A0xb552e4b5955ef611!2sAv.%2018%20de%20Julio%201513%2C%2011100%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1654205932016!5m2!1ses!2suy" width="500" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>

                  </div>
              </div> 
          </div> 
  )
}

export default Contact