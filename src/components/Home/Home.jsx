import React, { Component } from 'react'
import exampleImage from '../../images/images1.svg';
import { FaStar } from "react-icons/fa";
export default class Home extends Component {
render() {
    return (
    <div className='text-center home py-5'>
        <img src={exampleImage} alt="" className='mekki pt-5' />
        <div className="text-center text-white">
            <h2 className='fw-bolder'>START FRAMEWORK</h2>
            <div className="mb-2 d-flex justify-content-center align-items-center">
            <p className=' l bg-white m-3'></p>
            <div className=""><FaStar/></div>
            <p className=' l bg-white m-3'></p>
            </div>
            <p className='m-0 pb-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    )
}
}
