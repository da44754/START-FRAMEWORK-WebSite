import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light py-4">
                    <div className="container">
                        <Link className="navbar-brand text-white text-upper-case fw-bolder fs-2" to="/"> Start Framework</Link>
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item me-3 rounded-3">
                                    <NavLink
                                        activeClassName="active rounded-3"
                                        className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 NavLink"
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3 rounded-3">
                                    <NavLink
                                        activeClassName="active rounded-3"
                                        className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 NavLink"
                                        to="/portfolio"
                                    >
                                        Portofolio
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3 rounded-3">
                                    <NavLink
                                        activeClassName="active rounded-3"
                                        className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 NavLink"
                                        to="/contact"
                                    >
                                        contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
