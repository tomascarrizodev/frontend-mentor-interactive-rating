import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import SVG from '../assets/illustration-thank-you.svg';
import FinalRate from "../atoms/FinalRate";
import './ThankContainer.scss'

export default function ThankContainer({ active }) {
    return (
        <>
            <div className="thank-container" >
                <img src={SVG} alt="Thank you!" />
                <FinalRate active={active} />
                <Title text="Thank you!" />
                <Paragraph text="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" />
            </div>
        </>
    )
}