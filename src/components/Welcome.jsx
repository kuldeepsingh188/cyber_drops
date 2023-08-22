import React from 'react'
import { Col, Row } from 'react-bootstrap'
import umbrala from '../assests/img/png/umbrala.webp'
import umbrala2 from '../assests/img/png/umbrela2.webp'

const Welcome = () => {
    return (
        <div className='bg_black mt_1 position-relative overflow-hidden'>
            <div className='shado2'></div>
            <div className='shado3'></div>
            <div className='custm_container py-5 '>
                <Row className='d-flex align-items-center pt-2 pb-5 flex-column-reverse flex-md-row'>
                    <Col data-aos="fade-right" data-aos-duration="1000" md={6}>
                        <h1 className='m-0 ff_lato fs_xxl fw-bolder cl_fff pb-4 mb-1'>Welcome to<span className='d-block cl_F1AC73'> Cyber Drops</span></h1>
                        <p className='m-0 ff_lato fs_sm fw-normal cl_fff pb-5 mb-3'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
                        <button className='m-0 ff_lato fs_2xmd fw-semibold cl_fff explore'>Explore Now</button>
                    </Col>
                    <Col data-aos="fade-left" data-aos-duration="1000" md={6} className=' d-flex justify-content-center'>
                        <span className='key'><img className='ms-xl-5 ps-3 w-100 pt-md-0 pt-4 ' src={umbrala} alt="umbrala" /></span>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-between py-md-5 mt-3'>
                    <Col data-aos="fade-down-left" data-aos-duration="1000" md={5} className=' d-flex justify-content-center'>
                        <span><img className='w-100 key' src={umbrala2} alt="umbrala" /></span>
                    </Col>
                    <Col data-aos="fade-up-left" data-aos-duration="1000" md={5}>
                        <h1 className='m-0 ff_lato fs_xl fw-bold cl_fff pb-3 mb-1 pt-md-0 pt-4'>Our <span className='cl_F1AC73'>Mission</span></h1>
                        <p className='m-0 ff_lato fs_sm fw-normal cl_fff pb-5 mb-2'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                        <button className='m-0 ff_lato fs_2xmd fw-semibold cl_fff explore'>Read More</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Welcome