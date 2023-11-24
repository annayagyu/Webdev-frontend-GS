import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import iconUser from '../assets/iconuser.png';

function Nav() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('senha');
        alert('Sua sessão encerrada.')
        navigate('/')
    }

    const validade = (e) => {
        e.preventDefault();
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/home');
        } else {
            alert('Efetue o login antes de transitar pelo site.');
        }
    }

    const getUser = sessionStorage.getItem('usuario')
    const getEmail = sessionStorage.getItem('email')

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="btn navbar-brand" onClick={validade}><img src={logo} width="180px" alt='Logo da empresa' /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">

                    <ul className="navbar-nav col text-end">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <img src={iconUser} width="50px" class="float-end"  />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/'>Login</Link></li>
                                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                       
                        <span className="navbar-text">
                        {getEmail ? (
                                        <p className='infousuario'>Nome:{getUser} <br />Email:{getEmail} </p>
                                    ) : (
                                        <p></p>
                                    )}
                        </span>
                        
                        <span className="navbar-text">
                            Global Solution 2023 - Engenharia de software
                        </span>

                        
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav