import React from "react";
import logo from './images/logoSFF.png'
import { Link } from "react-router-dom";
import {Telephone} from 'react-bootstrap-icons';
const Footer=()=>{
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to="/" className="col-12 col-md-3 aling-items-center justify-content-center">
                            <img src={logo} className="mx-2" width={130}></img>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2" >Tacos Menudo Don Lalo</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Contáctanos</li>
                            <li className="d-flex justify-content p-3">
                                <Telephone color="white"/> +52 81 2704 3514
                            </li>
                            <li className="d-flex justify-content p-3">
                                <Telephone color="white"/>+52 1 81 2359 6340
                            </li>
                        </ul>
                    </nav>
                </div>
                                    <div className='text-center p-3'>
                          © 2022 Copyright:  Tacos Menudo Don Lalo
                        </div>
            </footer>
        </div>
    )
}

export default Footer