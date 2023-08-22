import React from 'react'
import { Col, Row } from 'react-bootstrap'
import umbrala_sun from '../assests/img/png/umbrala_sun.webp'
import umbrala_cloud from '../assests/img/png/umbrala_cloud.webp'
import umbrala_sky from '../assests/img/png/umbrala_sky.webp'
import doge from '../assests/img/png/doge.webp'
import tree from '../assests/img/png/tree.webp'
import of_um from '../assests/img/png/overflow_umbrala.webp'

const Algo = () => {
    return (
        <div className='bg_black mt_1 position-relative'>
            <div className='algo_um1'><img src={of_um} alt="" /></div>
            <div className='shado4'></div>
            <div className='shado5'></div>
            <div className='shado6'></div>
            <div className='custm_container py-5'>
                <Row className='align-items-center py-md-5 mt-3 flex-column-reverse flex-md-row'>
                    <Col data-aos="zoom-in" data-aos-duration="1000" md={6} className='pt-4'>
                        <h3 className='m-0 ff_lato fs_xl fw-bold cl_fff'>Our <span className='cl_F1AC73'>Algo</span> </h3>
                        <p className='m-0 ff_lato fs_sm fw-normal cl_fff pt-3 mt-1'>We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily micromanagement. While most trading algorithms can’t stand up against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of income with minimal ups and downs. Our algorithm has been in the works for YEARS. This has given us the time to rigorously backtest and release any needed hotfixes. As of early March 2022, we have close to a quarter of a million under direct management!</p>
                    </Col>
                    <Col data-aos="zoom-in-up" data-aos-duration="1000" md={6}>
                        <div className='d-flex align-items-center justify-content-md-end justify-content-center pt-md-0'>
                            <div className=''>
                                <div><img className='w-100 zoom_in ' src={umbrala_sun} alt="" /></div>
                                <div className='pt-4'><img className='w-100 zoom_in' src={umbrala_cloud} alt="" /></div>
                            </div>
                            <span className='ps-4'><img className='w-100 zoom_in' src={umbrala_sky} alt="" /></span>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='custm_container pt-4 pb-5 mt-2'>
                <Row className=' align-items-center justify-content-between'>
                    <Col data-aos="zoom-in" data-aos-duration="1000" md={6} className='ms-md-5'>
                        <div className='grid_container'>
                                <div className='grid_item1'><img className='w-100 zoom_in' src={tree} alt="" /></div>
                                <div className='grid_item2'><img className='w-100 zoom_in' src={tree} alt="" /></div>
                                <div className='grid_item3 mt_38'><img className='w-100 zoom_in' src={ doge} alt="" /></div>
                                <div className='grid_item4 mt_38'><img className='w-100 zoom_in' src={ doge} alt="" /></div> 
                        </div>
                    </Col>
                    <Col data-aos="zoom-in-up" data-aos-duration="1000" md={5} className='pt-4 pt-md-0'>
                        <div className='ps-4'>
                        <h3 className='m-0 ff_lato fs_xl fw-bold cl_fff'>What <span className='cl_F1AC73'>we do</span></h3>
                        <p className='m-0 ff_lato fs_sm fw-normal cl_fff pt-3 mt-1'>1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div> 
    )
}

export default Algo