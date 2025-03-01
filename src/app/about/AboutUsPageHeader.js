
import Image from 'next/image';

//css
import '@/styles/tailwindcss.css';
import '@/styles/Typography.css';
import '@/styles/aboutuspage/AboutUsPage.css';

//Components
import Header from '../home/Header';
import TextRevealComponent from '../TextRevealComponent';

//Images
import HeroMobile from '@/Images/aboutpage/about-hero-mobile.webp';
import HeroLarge from '@/Images/aboutpage/about-hero.webp';

//Font
import { Plus_Jakarta_Sans } from 'next/font/google';
const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})


function AboutUsPageHeader() {
    return (
        <>
            <Header />
            <header className={' bg-custom-almostblack flex flex-col items-center ' + plus_jakarta_sans.className}>

                <div className='w-full gap-10 pt-20 px-5 pb-8  sm:pt-32 sm:pb-16 sm:px-10 lg:px-36 flex flex-col items-center '>
                    <h1 className=" common-h1-heading bg-about-title-gradient text-center pb-2.5 sm:w-full " data-aos="fade-up">Meet the <br /> Payppy Squad</h1>
                    <p className=" common-paragraph text-center text-custom-ghostgrey max-w-xs sm:max-w-[630px] lg:max-w-2xl  w-full" data-aos="fade-up">A sip of fashion, a toast to fintech&mdash; our team at Payppy makes magic happen, one feature at a time! </p>
                </div>

                <div className=' w-full sm:py-7 sm:px-6 pb-20 sm:pb-20 lg:pb-32 '>
                    <Image src={HeroMobile} alt='img' quality={100} className='mx-auto sm:hidden w-full min-h-[337px] h-full ' data-aos="fade-up" />
                    <Image src={HeroLarge} alt='img' quality={100} className='mx-auto lg:max-w-[1064px] lg:w-full lg:max-h-[690px]lg:h-full  hidden sm:block object-cover object-center' data-aos="fade-up" />
                </div>

            </header>

            <TextRevealComponent />
        </>
    )
}

export default AboutUsPageHeader;
