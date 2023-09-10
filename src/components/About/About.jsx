import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
export default class About extends Component {
  render() {
    return(
      <div className=" about p-5 text-white">
      <h2 className="fw-bolder text-center pt-5 mt-5">ABOUT COMPONENT</h2>
      <div className="mb-2 d-flex justify-content-center align-items-center ">
            <p className=' l bg-white m-3'></p>
            <div className=" "><FaStar/></div>
            <p className=' l bg-white m-3'></p>
            </div>
            <div className="container">
            <div className="row px-5">
        <div className="col-md-6">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
          CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6 pb-5">
            <p className="pb-5">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          </div> 
            </div>
      </div>
    )
  }
}
