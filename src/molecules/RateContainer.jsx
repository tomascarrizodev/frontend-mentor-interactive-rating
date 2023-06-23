import Button from '../atoms/Button';
import Paragraph from '../atoms/Paragraph';
import Rate from '../atoms/Rate';
import Title from '../atoms/Title';
import './RateContainer.scss'

const rates = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 }
]

export default function RateContainer({ active, setActive, submit, setSubmit, setAnimate, animate, values }) {
    return (
        <>
            <Rate number="star" />
            <Title text="How did we go?" />
            <Paragraph text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
            <div className='rates-container'>
                {rates.map(i => {
                    return (<Rate key={i.id} active={active} setActive={setActive} number={i.value} />)
                })}
            </div>
            <Button submit={submit} setSubmit={setSubmit} setAnimate={setAnimate} animate={animate} values={values} />
        </>
    )
}