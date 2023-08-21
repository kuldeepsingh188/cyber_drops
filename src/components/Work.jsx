import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Work = () => {
    return (
        <div className='bg_black py-4 mt_1'>
            <div className='custm_container py-5 mt-sm-2'>
                <p className='m-0 ff_lato fs_xl fw-bold cl_fff text-center pb-5'>How it <span className='cl_F1AC73'>works</span></p>
                <Row>
                    <Col data-aos="zoom-out-up" lg={3} md={4} sm={6} className=' d-flex justify-content-center'>
                        <div className='nft_card ggg d-flex align-items-center flex-column mt-3'>
                            <div className='cercle d-flex justify-content-center align-items-center my-4'>
                                <p className='m-0 ff_lato fs_md fw-bold cl_fff number'>01</p>
                            </div>
                            <p className='ff_lato fw-bold fs_2xmd cl_fff m-0'>Mint NFT</p>
                            <p className='m-0 ff_lato fs_xsm fw-normal cl_fff pt-3 pb-5 text-center must'>You must own our NFT to connect to direct management or participate in governance
                            </p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-out-up" lg={3} md={4} sm={6} className=' d-flex justify-content-center'>
                        <div className='nft_card d-flex align-items-center flex-column mt-3'>
                            <div className='cercle d-flex justify-content-center align-items-center my-4'>
                                <p className='m-0 ff_lato fs_md fw-bold cl_fff number'>02</p>
                            </div>
                            <p className='ff_lato fw-bold fs_2xmd cl_fff m-0'>Verify NFT Ownership</p>
                            <p className='m-0 ff_lato fs_xsm fw-normal cl_fff pt-3 pb-4 text-center must'>Only Cyber Drops that are have verified are eligible to be connected under direct management
                            </p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-out-up" lg={3} md={4} sm={6} className=' d-flex justify-content-center'>
                        <div className='nft_card d-flex align-items-center flex-column mt-3'>
                            <div className='cercle d-flex justify-content-center align-items-center my-4'>
                                <p className='m-0 ff_lato fs_md fw-bold cl_fff number'>03</p>
                            </div>
                            <p className='ff_lato fw-bold fs_2xmd cl_fff m-0 text-center'>Link API to your account</p>
                            <p className='m-0 ff_lato fs_xsm fw-normal cl_fff pt-3 pb-5 text-center must'>Only HODLers that submit their API key and secret will be under direct management 

                            </p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-out-up" lg={3} md={4} sm={6} className=' d-flex justify-content-center'>
                        <div className='nft_card d-flex align-items-center flex-column mt-3'>
                            <div className='cercle d-flex justify-content-center align-items-center my-4'>
                                <p className='m-0 ff_lato fs_md fw-bold cl_fff number'>04</p>
                            </div>
                            <p className='ff_lato fw-bold fs_2xmd cl_fff m-0'>Passive Income for life</p>
                            <p className='m-0 ff_lato fs_xsm fw-normal cl_fff pt-3 pb-4 text-center must'>As long as your HODL your Cyber Drop, you will be connected under direct management
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Work