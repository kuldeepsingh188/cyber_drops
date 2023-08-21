import React from 'react'
import footer_umbrala from '../assests/img/png/footer_umbrala.webp'
import { Discord, M_logo, Ship, Twiter } from './Icon'

const Footer = () => {
    return (
        <div className='bg_black py-lg-5 mt_1 position-relative'>
            <div className='shado9'></div>
            <div className='custm_container pt-5'>
                <div className='d-flex justify-content-center'>
                    <img data-aos="zoom-in-down" className='key' src={footer_umbrala} alt="" />
                </div>
                <p data-aos="zoom-in-left" data-aos-duration="1500" className='m-0 ff_lato fs_lg fw_semibold cl_F1AC73 text-center  mt-2'>Cyber Drops</p>
                <p data-aos="zoom-in-left" data-aos-duration="1500" className='m-0 ff_lato fs_xsm fw-normal cl_fff m-auto vivera mt-3 text-center'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet.</p>

                <div data-aos="zoom-in-left" className='d-flex justify-content-center mt-4 gap-3'>
                    <div className='nav_cercle d-flex justify-content-center align-items-center cp'><Ship /></div>
                    <div className='nav_cercle d-flex justify-content-center align-items-center cp'><Discord /></div>
                    <div className='nav_cercle d-flex justify-content-center align-items-center cp'><Twiter /></div>
                    <div className='nav_cercle d-flex justify-content-center align-items-center cp'><M_logo /></div>
                </div>
            </div>
            <hr className='cl_fff'></hr>
            <p className='m-0 ff_lato fs_xsm fw-normal cl_fff text-center opacity-50'>Copyright By 2022</p>
        </div>
    )
}

export default Footer