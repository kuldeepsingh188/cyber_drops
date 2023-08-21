import React, { useState } from 'react'
import cyber_logo from '../assests/img/png/cyber_logo.png'
import { Discord, M_logo, Ship, Twiter } from './Icon'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    if (visible) {
        document.body.classList.add("overflow-hidden")
    } else {
        document.body.classList.remove('overflow-hidden')
    }
    return (
        <div className='py-3'>
            <div className='shado1'></div>
            <div className='custm_container'>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className=''>
                        <img src={cyber_logo} alt="cyber_logo" />
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <div className='d-none d-lg-block'>
                            <ul className='d-flex align-items-ce m-0 gap-3'>
                                <li><Link to="/" className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Home</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>About</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Team</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Roadmap</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Partners</Link></li>
                            </ul>
                        </div>
                        <div className='d-flex gap-3'>
                            <div className='nav_cercle d-flex justify-content-center align-items-center cp'><Ship /></div>
                            <div className='nav_cercle d-flex justify-content-center align-items-center cp'><Discord /></div>
                            <div className='nav_cercle d-flex justify-content-center align-items-center cp'><Twiter /></div>
                            <div className='nav_cercle d-flex justify-content-center align-items-center cp'><M_logo /></div>
                        </div>
                        <button className='wallet d-none d-lg-block m-0 px-3 py-2 ff_lato fs_xsm fw-medium cl_fff'>
                            Connect Wallet
                        </button>
                        <div className='d-lg-none'>
                            <Link onClick={() => setVisible(true)}>
                                <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5868 0C1.60587 0 0 1.60587 0 3.5868V3.5868C0 5.56774 1.60587 7.1736 3.5868 7.1736H53.802C55.7829 7.1736 57.3888 5.56774 57.3888 3.5868V3.5868C57.3888 1.60587 55.7829 0 53.802 0H3.5868ZM3.5868 21.3056C1.60587 21.3056 0 22.9115 0 24.8924V24.8924C0 26.8733 1.60587 28.4792 3.5868 28.4792H53.802C55.7829 28.4792 57.3888 26.8733 57.3888 24.8924V24.8924C57.3888 22.9115 55.7829 21.3056 53.802 21.3056H3.5868ZM3.5868 42.8264C1.60587 42.8264 0 44.4323 0 46.4132V46.4132C0 48.3941 1.60587 50 3.5868 50H53.802C55.7829 50 57.3888 48.3941 57.3888 46.4132V46.4132C57.3888 44.4323 55.7829 42.8264 53.802 42.8264H3.5868Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='d-lg-none'>
                    <div className={`${visible ? 'nav_show' : 'nav_fix'}`}>
                        <div className='d-flex align-items-center flex-column gap-3'>
                            <div>
                                <Link onClick={() => setVisible(false)} className='crose'><svg width="50" height="50" viewBox="0 0 475 475" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M85.1706 0L0 85.1706L43.4914 128.662L151.012 237.994L43.4914 345.515L0 387.194L85.1706 474.177L128.662 430.685L237.994 321.353L345.515 430.685L387.194 474.177L474.177 387.194L430.685 345.515L321.353 237.994L430.685 128.662L474.177 85.1706L387.194 0L345.515 43.4914L237.994 151.012L128.662 43.4914L85.1706 0Z" fill="white" />
                                </svg>
                                </Link>
                            </div>
                            <ul className='d-flex align-items-ce m-0 gap-3 p-0 text-center flex-column'>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Home</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>About</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Team</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Roadmap</Link></li>
                                <li><Link className='m-0 cl_chang cl_fff ff_lato fs_xsm fw-normal'>Partners</Link></li>
                            </ul>
                            <button className='wallet d-block m-0 px-3 py-2'>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar