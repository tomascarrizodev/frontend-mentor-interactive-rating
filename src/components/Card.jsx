import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './Card.scss';
import RateContainer from '../molecules/RateContainer';
import ThankContainer from '../molecules/ThankContainer';

export default function Card() {
    const show = [{ opacity: 0, y: 20, duration: 3 }, { opacity: 1, y: 0 }]
    const hide = [{ opacity: 1, y: 0, duration: 3 }, { opacity: 0, y: 20 }]
    const card = useRef()
    const [active, setActive] = useState(0)
    const [submit, setSubmit] = useState(false)
    const [animate, setAnimate] = useState(show)
    useLayoutEffect(() => {
        gsap.fromTo(card.current, ...animate)
    }, [animate])
    let condition = true
    if (active > 0)
        if (submit == true) 
            condition = false
    return (
        <>
            <div className='card' ref={card}>
                {condition
                    ? <RateContainer active={active} setActive={setActive} submit={submit} setSubmit={setSubmit} setAnimate={setAnimate} animate={animate} values={[show, hide]} />
                    : <ThankContainer active={active} />}
            </div>
        </>
    )
}