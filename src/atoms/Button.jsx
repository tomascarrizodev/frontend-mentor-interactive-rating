import './Button.scss';

export default function Button({ setSubmit, submit, setAnimate, animate, values }) {
    function handleCLick() {
        setAnimate(animate = values[1])
        setTimeout(() => {
            setAnimate(animate = values[0])
            setSubmit(submit = true)
        }, 1000)
    }
    return (
        <>
            <button type='button' className='button' onClick={handleCLick}>Submit</button>
        </>
    )
}