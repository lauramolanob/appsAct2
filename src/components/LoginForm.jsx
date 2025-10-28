import React from 'react'
import '../styles/App.css';

const LoginForm = () => (
    <>
        <section className="mt-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <h3 className="green-color text-center"><strong>Bienvenido a Nexus</strong></h3>
                            <p className=" text-center">Ingresa con tu email y contraseña:</p>
                            <div className="col-12 col-lg-12 mt-3">
                                <div className="input-group mb-3">
                                    <span className="input-group-text px-3 b-green">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"
                                            className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                        </svg>
                                    </span>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" />
                                        <label for="floatingInputGroup1">Email</label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text px-3 b-green">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"
                                            className="bi bi-lock-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                        </svg>
                                    </span>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Contraseña</label>
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Recordar mis datos</label>
                                </div>
                                <button type="submit" className="btn btn-green px-0 px-lg-3 py-lg-3 w-100">
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  );


export default LoginForm
