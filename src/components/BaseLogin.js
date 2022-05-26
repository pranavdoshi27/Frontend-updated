import React from 'react'
import { Link } from 'react-router-dom'

const BaseLogin = () => {
    return (
        <div className="col-sm-5 bg-img-pat align-self-center">
            <div className="info">
                <div className="logo clearfix">
                    <Link to="/home" className="nav-brand">PHARMAS</Link>
                </div>
                <div className="btn-section clearfix">
                    <Link to="/lap">
                        <button className="nav-link link-btn btn-danger default-bg">Login</button>
                    </Link>
                    <Link to="/regp">
                        <button className="nav-link link-btn btn-danger default-bg">Registration</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default BaseLogin
