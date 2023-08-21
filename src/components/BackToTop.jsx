import React from 'react'
import topbtn from '../assests/img/png/topUp.webp'

const BackToTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='custm_container position-relative'>
                <span
                    onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="circle d-flex justify-content-center align-items-center overflow-hidden"
                    ref={scrollTop}
                ><img className='w-100 d-flex' src={topbtn} alt="topUp" /></span>
            </div>
        </>

    )
}

export default BackToTop