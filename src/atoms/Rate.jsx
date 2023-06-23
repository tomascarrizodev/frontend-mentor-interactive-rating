import './Rate.scss';
import Star from '../assets/icon-star.svg'

function StarSVG() {
    return (
        <>
            <img src={Star} alt="Star" />
        </>
    )
}

export default function Rate({ number, active, setActive }) {
    function handleCLick() {
        setActive(active = number)
    }
    let className
    if (number == 'star') {
        className = 'rate'
    } else {
        className = 'rate btn'
        if (number == active)
            className = 'rate btn active'
    }
    return (
        <>
            <button onClick={number == 'star' ? null : handleCLick} className={className}>
                {number == 'star' ? <StarSVG /> : number}
            </button>
        </>
    )
}