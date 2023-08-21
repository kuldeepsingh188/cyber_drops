import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ov_um5 from '../assests/img/png/overflow_umbrala5.webp'

const Accordian = () => {
  return (
    <>
      <div className='bg_black py-5 position-relative mt_1'>
        <div className='shado8'></div>
        <div className='accor_um1'><img src={ov_um5} alt="" /></div>
        <div className='custm_container'>
          <div className='m-0 ff_lato fs_xl fw_bold cl_F1AC73 text-center pb-5'>FAQ <span className='cl_fff'>’s</span></div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item data-aos="fade-right" data-aos-duration="1000" eventKey="1" className='accordion_border m-auto'>
              <Accordion.Header className='ff_lato fs_2xmd fw-medium cl_fff py-4'>Egestas scelerisque duis quis aliquet. Consectetur?</Accordion.Header>
              <Accordion.Body className='ff_lato fs_xsm fw-normal cl_fff'>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos="fade-left" data-aos-duration="1000" eventKey="2" className='accordion_border mt-4 mb-2 m-auto'>
              <Accordion.Header className='ff_lato fs_2xmd fw-medium cl_fff py-4'>Ac nec enim amet, leo lorem quis neque vitae aliquet?</Accordion.Header>
              <Accordion.Body className='ff_lato fs_xsm fw-normal cl_fff'>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos="fade-right" data-aos-duration="1000" eventKey="3" className='accordion_border mt-4 mb-2 m-auto'>
              <Accordion.Header className='ff_lato fs_2xmd fw-medium cl_fff py-4'>Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh donec?</Accordion.Header>
              <Accordion.Body className='ff_lato fs_xsm fw-normal cl_fff'>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos="fade-left" data-aos-duration="1000" eventKey="4" className='accordion_border mt-4 mb-2 m-auto'>
              <Accordion.Header className='ff_lato fs_2xmd fw-medium cl_fff py-4'>Porta amet tortor nec pulvinar urna. Et blandit sit id?</Accordion.Header>
              <Accordion.Body className='ff_lato fs_xsm fw-normal cl_fff'>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item data-aos="fade-right" data-aos-duration="1000" eventKey="5" className='accordion_border mt-4 mb-2 m-auto'>
              <Accordion.Header className='ff_lato fs_2xmd fw-medium cl_fff py-4'>Tellus hendrerit fermentum ut hendrerit ac vestibulum?</Accordion.Header>
              <Accordion.Body className='ff_lato fs_xsm fw-normal cl_fff'>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div></>
  )
}

export default Accordian