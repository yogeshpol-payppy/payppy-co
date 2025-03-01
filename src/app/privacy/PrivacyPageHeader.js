import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import '@/styles/Typography.css';
import Header from '../home/Header';
import TextRevealComponent from '../TextRevealComponent';


const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})
function PrivacyHeader() {



    return (
        <>
            <Header />
            <header className={"bg-custom-almostblack  flex flex-col justify-center items-center gap-5 sm:gap-10 py-20 px-5 sm:py-28 sm:px-10  md:px-36 " + plus_jakarta_sans.className}>
                <h1 className="common-h1-heading text-custom-almostblack pb-2.5 text-center" data-aos="fade-up">Privacy policy</h1>
                <p className="common-paragraph text-custom-ghostgrey text-center" data-aos="fade-up">Last Modified Date: 28th February 2025</p>
            </header>
            <TextRevealComponent />
        </>
    )
}
export default PrivacyHeader;