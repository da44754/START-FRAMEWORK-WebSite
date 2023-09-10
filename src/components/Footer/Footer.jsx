import React, { Component } from "react";
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
export default class Footer extends Component {
    render() {
        return (
            <> 
                <div className="bottom-0">
                    <div className="First_footer">
                        <div className="row  p-5">
                            <div className="col-md-4 py-2">
                                <div
                                    className="card bg-transparent border-0 text-white"
                                >
                                    <div className="card-body text-center">
                                        <h3  >LOCATION</h3>
                                        <p  >2215 John Daniel Drive</p>
                                        <p  >Clark, MO 65243</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-2">
                                <div   className="card text-white bg-transparent border-0">
                                    <div  className="card-body text-center">
                                        <h3>AROUND THE WEB</h3>
                                        <div   className="icons d-flex justify-content-center">
                                            <div className="border border-white icon-container  mx-1  rounded-circle"><FaTwitter/></div>
                                            <div className="border border-white icon-container  mx-1   rounded-circle"><FaFacebook/></div>
                                            <div className="border border-white  icon-container mx-1   rounded-circle"><FaLinkedin/></div>
                                            <div className="border border-white  icon-container mx-1   rounded-circle"><FaGlobe /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-2">
                                <div className="card text-white bg-transparent border-0">
                                    <div className="card-body text-center">
                                        <h3>ABOUT FREELANCER</h3>
                                        <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                                        </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 text-center  mb-0 text-white second_footer">
                        <p>Copyright © Your Website 2021</p>
                    </div>
                </div>
            </>
        );
    }
}
