
//css
// import '@/styles/tailwindcss.css';
// import '@/styles/Typography.css';
// import '@/styles/landingpage/LandingPage.css';

//Images
// import LandingHeadStore from '@/Images/landingpage/LandingHeadStore.png';
// import LandingHeadSmallStore from '@/Images/landingpage/landingPageStore.png';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from "next/image";

//Components
import TextRevealComponent from "../TextRevealComponent";

//Images
import Playstore from '@/Images/Icons/playstore.svg';
import Link from 'next/link';

//font
const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
});

function LandingPageHeader() {
    return (
        <>
            <header className={"landing-page-header bg-custom-almostblack px-5 py-20 gap-20 sm:py-16 md:px-10 lg:px-[150px] lg:py-40 md:pt-32 flex flex-col justify-center items-center "}>

                {/* Hero Section */}
                <section className={"w-full gap-10 flex flex-col text-center items-center sm:pb-20 lg:gap-10 lg:pb-0 " + plus_jakarta_sans.className}>
                    <div className=" flex flex-col items-center lg:gap-6">
                        <span className="common-all-caps text-center text-custom-ghostgrey" data-aos="fade-up">FOR GEN Z AND MILLENNIALS</span>
                        <h1 className="experience-seamless-title common-h1-heading pb-3 " data-aos="fade-up">Shopping and Payments made rewarding</h1>
                        <p className="landing-page-para common-paragraph text-center text-custom-ghostgrey" data-aos="fade-up">Shop exclusive pre-drops, pay bills, and earn PepZ—Payppy, India's first fashion-fintech for has it all.</p>
                    </div>

                    <Link href={"https://play.google.com/store/apps/details?id=app.payppy.twa&hl=en_IN"} target='_blank' className=" bg-custom-almostblack  border border-[#414141]" data-aos="fade-up" >
                        <Image src={Playstore} width={240} height={80} alt="Playstore logo" quality={100} />
                    </Link>

                </section>

            </header>

            <TextRevealComponent />
        </>
    )
}

export default LandingPageHeader;



//rushikesh code
// import { Plus_Jakarta_Sans } from "next/font/google";
// import '@/styles/tailwindcss.css';
// import Link from "next/link";
// import Image from "next/image";
// import Arrow from '@/Images/landingpage/btnArrow.svg';
// import LandingHeadStore from '@/Images/landingpage/LandingHeadStore.png';
// import LandingHeadSmallStore from '@/Images/landingpage/landingPageStore.png';
// import '@/styles/Typography.css';
// import '@/styles/landingpage/LandingPage.css';
// import TextRevealComponent from "../TextRevealComponent";


// const plus_jakarta_sans = Plus_Jakarta_Sans({
//     subsets: ['latin'],
//     display: 'swap'
// })
// function LandingPageHeader() {
//     return (
//         <>
//             <header className={"landing-page-header bg-custom-almostblack px-5 pt-20 md:px-10 lg:px-36 md:pt-32 flex flex-col justify-center items-center " + plus_jakarta_sans.className}>
//                 <h1 className="experience-seamless-title common-h1-heading pb-10 " data-aos="fade-up">Experience seamless shopping like never before.</h1>
//                 <p className="landing-page-para common-paragraph text-center text-custom-ghostgrey" data-aos="fade-up">Drip styles and hottest collections from multiple brands, brought exclusively for the Gen Z and Millennials of India.</p>
//                 <div className="mt-10 mb-20">
//                     <button className={"visit-payppy-btn mx-auto flex  items-center justify-center " + plus_jakarta_sans.className} data-aos="fade-up">
//                         <Link href='https://payppy.app/' target='_blank' className={"visit-payppy-txt " + plus_jakarta_sans.className} >VISIT PAYPPY.APP</Link>
//                         <div className="btn-arrow-img-box relative">
//                             <Image src={Arrow}
//                                 width={28}
//                                 height={28}
//                                 alt="img"
//                                 className="btn-arrow-img"
//                                 quality={100}
//                             />
//                         </div>
//                     </button>
//                 </div>

//                 <div className="landing-page-header-img-box flex justify-center w-100 ">
//                     <Image src={LandingHeadStore}
//                         width={1063.25}
//                         height={643.82}
//                         alt="img"
//                         data-aos="fade-up"
//                         className="landing-head-store-img"
//                         quality={100}
//                     />
//                     <Image src={LandingHeadSmallStore}
//                         width={240}
//                         height={510}
//                         alt="img"
//                         data-aos="fade-up"
//                         className="landing-head-store-small-img"
//                         quality={100}
//                     />
//                 </div>
//             </header>
//             <TextRevealComponent />
//         </>
//     )
// }

// export default LandingPageHeader;