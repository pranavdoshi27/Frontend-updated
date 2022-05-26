import React from 'react'
import { Link } from 'react-router-dom'

const BaseLoginD = () => {
    return (
        <div className="col-sm-5 bg-img-doc align-self-center">
            <div className="info">
                <div className="logo clearfix">
                    <Link to="/home" className="nav-brand">PHARMAS</Link>
                </div>
                <div className="btn-section clearfix">
                    <Link to="/lad">
                        <button className="nav-link link-btn btn-danger default-bg">Login</button>
                    </Link>
                    <Link to="/regd">
                        <button className="nav-link link-btn btn-danger default-bg">Registration</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default BaseLoginD