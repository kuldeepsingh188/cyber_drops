import React from 'react'
import varun from '../assests/img/png/varun.webp'
import shubh from '../assests/img/png/shubh.webp'
import { Discord_sl, M_logo_sl, Twiter_sl } from './Icon'
import Slider from 'react-slick'
import of_um2 from '../assests/img/png/overflow_umbrala2.webp'


const Team = () => {
    const responsive = {
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }

    return (

        <div className='bg_black mt_1 position-relative'>
            <div className='team_um1'><img src={of_um2} alt="" /></div>
            <div className='team_um2'><img src={of_um2} alt="" /></div>
            <div className='shado7'></div>
            <div className='custm_container pt-sm-4 pb-5'>
                <p className='m-0 ff_lato fs_xl fw-bold cl_fff text-center py-5'>Meet the <span className='cl_F1AC73'>Team</span> </p>
                <Slider {...responsive} className='pb-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='img_card d-sm-flex mx-3'>
                            <span><img className='w-100' src={varun} alt="" /></span>
                            <div className='text-center d-flex justify-content-center align-items-center flex-column px-3 py-4'>
                                <p className='m-0 ff_lato fs_xmd fw-bold cl_000 pb-2'>Varun Muthu</p>
                                <p className='m-0 ff_lato fs_sm fw-medium cl_000 pb-4 mb-2'>Marketing Director</p>
                                <a className='m-0 ff_lato fs_sxm fw-normal cl_000 pb-4 mb-3' href="">https://www.linkedin.com/ <span className='d-block'>in/varunmuthu1</span> </a>
                                <div className='gap-2 d-flex'>
                                    <Discord_sl />
                                    <Twiter_sl />
                                    <M_logo_sl />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='img_card d-sm-flex mx-3'>
                            <span><img className='w-100' src={shubh} alt="" /></span>
                            <div className='text-center d-flex justify-content-center align-items-center flex-column px-3 py-4'>
                                <p className='m-0 ff_lato fs_xmd fw-bold cl_000 pb-2'>Shubh Sharma</p>
                                <p className='m-0 ff_lato fs_sm fw-medium cl_000 pb-4 mb-2'>Operations Director</p>
                                <a className='m-0 ff_lato fs_sxm fw-normal cl_000 pb-4 mb-3' href="">https://www.linkedin.com/<span className='d-block'>in/shubhsharma01/</span> </a>
                                <div className='gap-2 d-flex'>
                                    <Discord_sl />
                                    <Twiter_sl />
                                    <M_logo_sl />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='img_card d-sm-flex mx-3 justify-content-center'>
                            <span><img className='w-100' src={varun} alt="" /></span>
                            <div className='text-center d-flex justify-content-center align-items-center flex-column px-3 py-4'>
                                <p className='m-0 ff_lato fs_xmd fw-bold cl_000 pb-2'>Varun Muthu</p>
                                <p className='m-0 ff_lato fs_sm fw-medium cl_000 pb-4 mb-2'>Marketing Director</p>
                                <a className='m-0 ff_lato fs_sxm fw-normal cl_000' href="">https://www.linkedin.com/ <span className='d-block'>in/varunmuthu1</span> </a>
                                <div className='gap-2 d-flex'>
                                    <Discord_sl />
                                    <Twiter_sl />
                                    <M_logo_sl />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Team