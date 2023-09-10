import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
export default class Contact extends Component {
render() {
    return <div className="text-center port p-5"> 
    <h2 className="fw-bolder text-center">CONATCT SECTION</h2>
    <div className="mb-2 d-flex justify-content-center align-items-center ">
        <p className=' l l2 m-3'></p>
        <div className=" "><FaStar/></div>
        <p className=' l l2  m-3'></p>
        </div>
    <form className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
    <input className="form-control input-lg m-5 border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched shadow-none" type="text" placeholder="userName" />
    <input className="form-control input-lg border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched m-5 shadow-none" type="email" placeholder="userAge" />
    <input className="form-control input-lg border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched m-5 shadow-none" type="email" placeholder="userEmail" />
    <input className="form-control input-lg border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched m-5 shadow-none" type="email" placeholder="userPassword" />
    <button className="btn">Send Message</button>
</form>
    </div>;
}
}
