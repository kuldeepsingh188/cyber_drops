import React from 'react'
import bit from '../assests/img/png/bit.png'
import twentyfour from '../assests/img/png/twentyfour.png'
import hive from '../assests/img/png/hive.webp'
import bubble from '../assests/img/png/bubble3.png'
const Partner = () => {
    return (
        <div className='bg_black pt-lg-5 mt_1 pb-5'>
            <h2 className='text-center m-0 ff_lato fs_xl fw-bold cl_fff pt-5'>Part<span className='cl_F1AC73'>ners</span></h2>
            <div className='Bg_partner py-5 '>
                <div className='custm_container  pt-5'>
                    <div className=' d-flex justify-content-between align-items-center py-5 overflow-x-auto'>
                        <div data-aos="flip-left" className='mx-3'>
                            <div className='border_grarient d-inline-block py-4 px-5'>
                                <span><img className='my-2' src={bit} alt="" /></span>
                            </div>
                            <p className='m-0 ff_lato fs_sm fw-bold cl_000 text-center pt-3'>Playbit</p>
                        </div>
                        <div data-aos="flip-left" className='mx-3'>
                            <div className='border_grarient d-inline-block py- px-4'>
                                <span><img className='my-' src={twentyfour} alt="" /></span>
                            </div>
                            <p className='m-0 ff_lato fs_sm fw-bold cl_000 text-center pt-3'>24 Capital</p>
                        </div>
                        <div data-aos="flip-left" className='mx-3'>
                            <div className='border_grarient d-inline-block py- px-4'>
                                <span><img className='my-' src={hive} alt="" /></span>
                            </div>
                            <p className='m-0 ff_lato fs_sm fw-bold cl_000 text-center pt-3'>TradingHive</p>
                        </div>
                        <div data-aos="flip-left" className='mx-3'>
                            <div className='border_grarient d-inline-block pt-1 px-4'>
                                <span><img className='my-' src={bubble} alt="" /></span>
                            </div>
                            <p className='m-0 ff_lato fs_sm fw-bold cl_000 text-center pt-3'>Focus Group Equities</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='m-0 ff_lato fs_sm fw-bold d-flex justify-content-center align-items-end cl_F1AC73 text-center finance'>For business and collaborations, contact us team@cyberdrops.finance</p>
        </div>
    )
}

export default Partner