import React from 'react'
import ov_um4 from '../assests/img/png/overflow_umbrala4.webp'
import ov_um5 from '../assests/img/png/overflow_umbrala.webp'
const RoadMap = () => {
    return (
        <div className='bg_black py-sm-5 position-relative mt_1'>
            <div className='road_um1'><img src={ov_um4} alt="" /></div>
            <div className='road_um2'><img src={ov_um5} alt="" /></div>
            <div className='cutem_cantainer py-5'>
                <p className='m-0 ff_lato fs_xl fw_bold cl_fff text-center pt-4 pb-sm-5'>Road <span className='cl_F1AC73'>Map</span></p>
            </div>
            <div className='roadmap_bg position-relative'>
                <div className="layer_1"></div>
                <div className="layer_2"></div>
                <div class="timeline pt-2">
                    <div class="containar right timeline_img1">
                        <div class="content ps-sm-5 ms-lg-5">
                            <h2 className='cl_fff ff_lato m-0 ms-sm-5 ps-5 fs_xmd fw_semibold'>March 2022</h2>
                            <p className='cl_fff ff_lato m-0 ms-sm-5 ps-5 fs_xsm fw_normal pt-3'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='pt-5 mt-4'>
                        <div class="containar left timeline_img2  my-3 mt-4">
                            <div class="content text-md-end pe-md-5 me-lg-5 ps-md-0 ps-sm-5 translate_x">
                                <h2 className='cl_fff ff_lato ps-md-0 ps-5 ms-md-0 ms-sm-5 pe-md-5 me-md-5 fs_xmd fw_semibold'>March 2022</h2>
                                <p className='cl_fff ff_lato ps-md-0 ps-5 ms-md-0 ms-sm-5 pe-md-5 me-md-5 fs_xsm fw_normal pt-3 m-0 m-sm-3'>1000 Drops Launch on Ethereum</p>
                            </div>
                        </div>
                    </div>
                    <div className=' pt-5 m-0'>
                        <div class="containar right timeline_img3 my-3">
                            <div class="content ps-sm-5 ms-lg-5">
                                <h2 className='cl_fff ps-5 ms-sm-5 fs_xmd fw_semibold'>March 2022</h2>
                                <p className='cl_fff ps-5 ms-sm-5 fs_xsm fw_normal pt-3 m-0'>Creation of Treasury</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div class="containar left timeline_img4 my-3">
                            <div class="content text-md-end pe-md-5 me-lg-5 ps-md-0 ps-sm-5 translate_x">
                                <h2 className='cl_fff ps-md-0 ps-5 ms-md-0 ms-sm-5 ff_lato pe-md-5 me-5 fs_xmd fw_semibold'>April 2022</h2>
                                <p className='cl_fff ps-md-0 ps-5 ms-md-0 ms-sm-5 ff_lato pe-md-5 me-5 fs_xsm fw_normal pt-3 m-0'>Our First Airdrop</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div class="containar right timeline_img5 my-3">
                            <div class="content ps-sm-5 ms-lg-5">
                                <h2 className='cl_fff ff_lato m-0 ps-5 ms-sm-5 fs_xmd fw_semibold'>June 2022</h2>
                                <p className='cl_fff ff_lato m-0 ps-5 ms-sm-5 fs_xsm fw_normal pt-3'>Major Collabs</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div class="containar left timeline_img6 my-3">
                            <div class="content text-md-end me-lg-5 pe-md-5 ps-md-0 ps-sm-5 translate_x">
                                <h2 className='cl_fff ps-md-0 ps-5 ms-md-0 ms-sm-5 m-0 me-sm-5 pe-md-5 fs_xmd fw_semibold'>Sometime in Q3</h2>
                                <p className='cl_fff ps-md-0 ps-5 ms-md-0 ms-sm-5 m-0 me-sm-5 pe-md-5 pt-3'>Cyber Celebs come on Ethereum</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div class="containar right timeline_img7 my-3">
                            <div class="content ms-lg-5 ps-sm-5">
                                <h2 className='cl_fff ff_lato m-0 ms-sm-5 ps-5 fs_xmd fw_semibold'>Sometime in Q3</h2>
                                <p className='cl_fff ff_lato m-0 ms-sm-5 ps-5 fs_xsm fw_normal pt-3'>Streetwear + Merch</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div class="containar left timeline_img8 mt-3">
                            <div class="content text-md-end pe-md-5 me-lg-5 ps-md-0 ps-sm-5 translate_x">
                                <h2 className='cl_fff ps-md-0 ps-5 ms-md-0 ms-sm-5 ff_lato m-0 pe-md-5 me-sm-5 fs_xmd fw_semibold'>Sometime in Q4</h2>
                                <p className='cl_fff ps-md-0 ps-5 ms-md-0 ms-sm-5 ff_lato m-0 pe-md-5 me-sm-5 fs_xsm fw_normal pt-3'>Enhanced Partnerships</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap