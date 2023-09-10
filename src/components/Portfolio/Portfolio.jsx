import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import img1 from '../../images/images1 (1).png';
import img2 from '../../images/images2.png';
import img3 from '../../images/images3.png';
export default class Portfolio extends Component {
render() {
    return <div className="text-center port p-5"> 
        <h2 className="fw-bolder text-center">PORTFOLIO COMPONENT</h2>
        <div className="mb-2 d-flex justify-content-center align-items-center ">
            <p className=' l l2 m-3'></p>
            <div className=" "><FaStar/></div>
            <p className=' l l2  m-3'></p>
            </div>
        <div className="container">
            <div className="row">
            <div className="col-md-4 mb-5 pe-4 all">
                <div  class="rounded-3 overflow-hidden position-relative">
                <img  alt="" class="w-100 rounded-3" src={img1}/>
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i className="text-white plus-icon"><FaPlus/></i>
</div>
                </div>
            </div>
            <div className="col-md-4 mb-5 pe-4 all">
                <div  class="rounded-3 overflow-hidden position-relative">
                <img  alt="" class="w-100 rounded-3" src={img2}/>
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white plus-icon"><FaPlus/></i>
            </div>
                </div>
            </div>
            <div className="col-md-4 mb-5 pe-4 all">
                <div  class="rounded-3 overflow-hidden position-relative">
                <img  alt="" class="w-100 rounded-3" src={img3}/>
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white plus-icon"><FaPlus/></i>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-5 pe-4 all">
                <div  class="rounded-3 overflow-hidden position-relative">
                <img  alt="" class="w-100 rounded-3" src={img1}/>
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white plus-icon"><FaPlus/></i>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-5 pe-4 all">
                <div  class="rounded-3 overflow-hidden position-relative">
                <img  alt="" class="w-100 rounded-3" src={img2}/>
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white plus-icon"><FaPlus/></i>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-5 pe-4 ">
                <div  class="rounded-3 overflow-hidden position-relative">
                <img  alt="" class="w-100 rounded-3" src={img3}/>
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white plus-icon"><FaPlus/></i>
                </div>
                </div>
            </div>
        </div>
    </div>;
    </div>
}
}

