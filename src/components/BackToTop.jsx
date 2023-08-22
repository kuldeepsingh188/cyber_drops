import React from 'react'
import { Container } from 'react-bootstrap'
import topup from "../assests/img/png/topUp.webp"

const BackToTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    // const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    }, [])
    return (
        <div>
            <Container>
                <span
                    onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="circle overflow-hidden"
                    ref={scrollTop}
                ><img className='w-100 d-flex' src={topup} alt="topUp" /></span>
            </Container>
        </div>
    )
}

export default BackToTop