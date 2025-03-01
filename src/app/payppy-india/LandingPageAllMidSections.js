'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

//css
import '@/styles/tailwindcss.css';
import '@/styles/landingpage/LandingPage.css';
import '@/styles/Typography.css';

//Images
import Playstore from '@/Images/icons/playstore.svg';
import GalaxyBackground from '@/Images/becomeapartnerpage/background-asset.png';
import StarBackground from '@/Images/landingpage/star-background.svg';


//section 1
import Section1Img from "@/Images/landingpage/flix-image.webp";
import Section1Icon from "@/Images/landingpage/fashion-icon.svg";

//section 2
import Section2Img from "@/Images/landingpage/pepscrore-image-min.png";
import Section2Icon from "@/Images/landingpage/bill-icon.svg";

//section 3
import Section3Img from "@/Images/landingpage/myvoucher-image.webp";
import Section3Icon from "@/Images/landingpage/discount-icon.svg";

//section 4
import Section4Img from "@/Images/landingpage/pepz-image-min.png";
import Section4Icon from "@/Images/landingpage/pepz-icon.svg";

//section 5
import Section5Img from "@/Images/landingpage/refer&earn-image-min.png";
import Section5Icon from "@/Images/landingpage/refer-icon.svg";

//section 6
import Install from "@/Images/landingpage/install-icon.svg";
import Membership from "@/Images/landingpage/membership-icon.svg";
import PayppyCard from "@/Images/landingpage/pep-score-icon.svg";


//Components
// import FeatureCard from '@/components/FeatureCard';
import NavigationButton from '@/components/NavigationButton';
import NavigationButtonSmallWhite from '@/components/NavigationButtonSmallWhite';
import NavigationButtonSmall from '@/components/NavigationButtonSmall';
import TextRevealComponent from '../TextRevealComponent';



//font
const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})


function LandingPageAllMidSections() {

    const section1Title = "Fashion, on the go";
    const section1Decription = <>Watch tips and explore blogs on fashion, <br /> brands, and styling— only on Flix!</>;
    const section1ButtonName = "EXPLORE FLIX";
    const section1ButtonHref = "https://payppy.app/flix";

    const section2Title = "Bills that build score";
    const section2Decription = "Pay rent, electricity, broadband, and Fastag bills quickly to build your Pepscore."
    const section2ButtonName = "PAY BILLS";
    const section2ButtonHref = "https://payppy.app/my-account";

    const section3Title = <> Discounts on your <br /> favourites </>
    const section3Decription = <>Get discount vouchers from 250+ brands <br /> like Zomato, Starbucks, and more!</>;
    const section3ButtonName = "EXPLORE REWARDS";
    const section3ButtonHref = "https://payppy.app/";

    const section4Title = "Rewards that make sense";
    const section4Decription = "Earn and redeem PepZ on things you love, and climb up Payppy's membership tiers";
    const section4ButtonName = "EARN PEPZ";
    const section4ButtonHref = "https://payppy.app/my-account";

    const section5Title = "Referrals that pay back";
    const section5Decription = <> Get your friends to sign-up on payppy.app <br /> and everyone earns PepZ instantly </>
    const section5ButtonName = "REFER FRIENDS";
    const section5ButtonHref = "https://payppy.app/my-account";


    return (
        <div className={' w-full h-full ' + plus_jakarta_sans.className}>
            {/* section1 */}
            <section className={'landing-page-section-one landing-page-section-two flex   items-center justify-center  w-full ' + plus_jakarta_sans.className}>
                <div className=' flex flex-col-reverse lg:flex-row items-center justify-between lg:max-w-7xl gap-20 md:gap-28 py-20 lg:gap-[120px]'>
                    <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start  lg:ml-[10%]'>
                        <Image src={Section1Icon} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className=' gap-2.5 flex flex-col items-center lg:items-start'>
                            <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{section1Title}</h5>
                            <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{section1Decription}</p>
                        </div>
                        <div className="flex ">
                            <NavigationButtonSmall buttonName={section1ButtonName} href={section1ButtonHref} />
                        </div>
                    </main>
                    <main className='landing-section-one-img-box'>
                        <Image src={Section1Img} alt="img" quality={100} className=' min-w-[500px] min-h-[500px] sm:max-w-[648px] sm:w-full sm:max-h-[648px] sm:h-full' data-aos="fade-up" />
                    </main>
                </div>
            </section>
            {/* <section className={'landing-page-section-one landing-page-section-two flex   items-center justify-center  w-full ' + plus_jakarta_sans.className}>
                <div className=' flex flex-col-reverse lg:flex-row items-center justify-between lg:max-w-7xl gap-20 md:gap-28 py-20 lg:gap-[120px]'>
                    <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start'>
                        <Image src={Section1Icon} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className=' gap-2.5 flex flex-col items-center lg:items-start'>
                            <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{section1Title}</h5>
                            <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{section1Decription}</p>
                        </div>
                        <div className="flex ">
                            <NavigationButtonSmall buttonName={section1ButtonName} href={section1ButtonHref} />
                        </div>
                    </main>
                    <main className='landing-section-one-img-box'>
                        <Image src={Section1Img} alt="img" quality={100} className=' min-w-[500px] min-h-[500px] sm:max-w-[648px] sm:w-full sm:max-h-[648px] sm:h-full' data-aos="fade-up" />
                    </main>
                </div>
            </section> */}

            {/* section2 */}
            <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center w-full ' + plus_jakarta_sans.className}>
                <div className=' flex flex-col lg:flex-row items-center justify-between lg:max-w-7xl gap-20 md:gap-28 py-20 lg:gap-[120px]  w-full '>

                    <main className='landing-section-one-img-box '>
                        <Image src={Section2Img} alt="img" quality={100} className=' min-w-[500px] min-h-[500px] sm:max-w-[648px] sm:w-full sm:max-h-[648px] sm:h-full' data-aos="fade-up" />
                    </main>

                    <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start'>
                        <Image src={Section2Icon} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className=' gap-2.5 flex flex-col items-center lg:items-start'>
                            <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{section2Title}</h5>
                            <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{section2Decription}</p>
                        </div>

                        <NavigationButtonSmall buttonName={section2ButtonName} href={section2ButtonHref} />
                    </main>
                </div>
            </section>

            {/* section3 */}
            <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center w-full ' + plus_jakarta_sans.className}>

                <div className=' flex flex-col-reverse lg:flex-row items-center justify-between lg:max-w-7xl gap-20 md:gap-28 py-20 lg:gap-[120px] w-full '>

                    <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start lg:ml-[10%]'>
                        <Image src={Section3Icon} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />

                        <div className=' gap-2.5 flex flex-col items-center lg:items-start'>
                            <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{section3Title}</h5>
                            <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{section3Decription}</p>
                        </div>

                        <NavigationButtonSmall buttonName={section3ButtonName} href={section3ButtonHref} />
                    </main>

                    <main className='landing-section-one-img-box'>
                        <Image src={Section3Img} alt="img" quality={100} className=' min-w-[500px] min-h-[500px] sm:max-w-[648px] sm:w-full sm:max-h-[648px] sm:h-full' data-aos="fade-up" />
                    </main>
                </div>
            </section>

            {/* section4 */}
            <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center w-full ' + plus_jakarta_sans.className}>
                <div className=' flex flex-col lg:flex-row items-center justify-between lg:max-w-7xl gap-20 md:gap-28 py-20 lg:gap-[120px]  w-full '>

                    <main className='landing-section-one-img-box '>
                        <Image src={Section4Img} alt="img" quality={100} className=' min-w-[500px] min-h-[500px] sm:max-w-[648px] sm:w-full sm:max-h-[648px] sm:h-full' data-aos="fade-up" />
                    </main>

                    <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start'>
                        <Image src={Section4Icon} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className=' gap-2.5 flex flex-col items-center lg:items-start'>
                            <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{section4Title}</h5>
                            <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{section4Decription}</p>
                        </div>
                        <div className="">
                            <NavigationButtonSmall buttonName={section4ButtonName} href={section4ButtonHref} />
                        </div>
                    </main>
                </div>
            </section>

            {/* section5 */}
            <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center w-full ' + plus_jakarta_sans.className}>
                <div className=' flex flex-col-reverse lg:flex-row items-center justify-between lg:max-w-7xl gap-20 md:gap-28 py-20 lg:gap-[120px] '>
                    <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start lg:ml-[10%]'>
                        <Image src={Section5Icon} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className=' gap-2.5 flex flex-col items-center lg:items-start'>
                            <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{section5Title}</h5>
                            <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{section5Decription}</p>
                        </div>

                        <NavigationButtonSmall buttonName={section5ButtonName} href={section5ButtonHref} />
                    </main>
                    <main className='landing-section-one-img-box'>
                        <Image src={Section5Img} alt="img" quality={100} className=' min-w-[500px] min-h-[500px] sm:max-w-[648px] sm:w-full sm:max-h-[648px] sm:h-full' data-aos="fade-up" />
                    </main>
                </div>
            </section>


            {/* <FeatureCard rightSideImg={true} title={section1Title} description={section1Decription} iconSrc={Section1Icon} imgSrc={Section1Img} buttonName={section1ButtonName} buttonHref={section1ButtonHref} />

            <FeatureCard rightSideImg={false} title={section2Title} description={section2Decription} iconSrc={Section2Icon} imgSrc={Section2Img} buttonName={section2ButtonName} buttonHref={section2ButtonHref} />

            <FeatureCard rightSideImg={true} title={section3Title} description={section3Decription} iconSrc={Section3Icon} imgSrc={Section3Img} buttonName={section3ButtonName} buttonHref={section3ButtonHref} />

            <FeatureCard rightSideImg={false} title={section4Title} description={section4Decription} iconSrc={Section4Icon} imgSrc={Section4Img} buttonName={section4ButtonName} buttonHref={section4ButtonHref} />

            <FeatureCard rightSideImg={true} title={section5Title} description={section5Decription} iconSrc={Section5Icon} imgSrc={Section5Img} buttonName={section5ButtonName} buttonHref={section5ButtonHref} /> */}


            {/* section6 - app features */}
            <section className='landing-page-section-four border-b gap-20 py-20  lg:py-32 border-[#DDDDDD] flex items-center justify-center w-full '>

                <div className="flex flex-col  lg:flex-row  gap-20 lg:max-w-7xl  landing-page-section-four-inner-container  ">

                    <div className='flex flex-col gap-3 items-center lg:items-start lg:max-w-[387px] w-full   '>
                        <Image src={Install} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className=' gap-2.5 flex flex-col  '>
                            <h5 className="bookmark-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0 " data-aos="fade-up">Download and<br /> browse </h5>
                            <p className="bookmark-para common-paragraph text-custom-graphite-grey text-center lg:text-left mx-auto lg:mx-0 text " data-aos="fade-up">Payppy is on web and on Play Store and App Store. Enjoy benefits and browse seamlessly.<br /> <br /> Enjoy our web and app experience. </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3  items-center lg:items-start lg:max-w-[387px] w-full  '>
                        <Image src={Membership} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className='gap-2.5 flex flex-col '>
                            <h5 className=".delivery-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0 " data-aos="fade-up">Enjoy<br /> membership quest </h5>
                            <p className="delivery-para  common-paragraph text-custom-graphite-grey  text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Spend more to earn more PepZ and upgrade from welcome , green to metal tier membership.<br /> <br /> Good perks, better status among others.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3  items-center lg:items-start lg:max-w-[387px] w-full '>
                        <Image src={PayppyCard} width={80} height={80} alt="img" quality={100} data-aos="fade-up" />
                        <div className='gap-2.5 flex flex-col '>
                            <h5 className="sustainability-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Get<br /> Payppy card</h5>
                            <p className="sustainability-para  common-paragraph text-custom-graphite-grey  text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Build your Pepscore and earn a personalised prepaid card by paying bills and spending on Payppy. <br /> <br /> Before CIBIL, comes Pepscore.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* section7 - Download Payppy in seconds */}
            <section className='gap-2.5 py-32 flex justify-center items-center  bg-custom-almostblack relative '>
                <div className='gap-10 lg:max-w-7xl flex flex-col w-full items-center'>

                    <div className=' gap-6 flex'>
                        <div className=' gap-6 flex flex-col items-center text-center'>
                            <h2 className=' common-h2-heading text-custom-white px-5' data-aos="fade-up">Download Payppy in seconds</h2>
                            <p className=' common-paragraph text-custom-silver-grey px-[67px] lg:px-0 lg:max-w-3xl' data-aos="fade-up">Sign up now to unlock all the perks with Payppy! Shop, pay, and play to level up your Pepscore and get exclusive benefits—all through our super easy web app.</p>
                        </div>
                    </div>


                    <div className="border border-solid border-[#7A7A7A] h-20" ></div>

                    <Link href={"https://play.google.com/store/apps/details?id=app.payppy.twa&hl=en_IN"} target='_blank' className=" bg-custom-almostblack  border border-[#414141]" data-aos="fade-up" >
                        <Image src={Playstore} width={240} height={80} alt="Playstore logo" quality={100} />
                    </Link>

                </div>
            </section>


            {/* section8 - become a partner  */}
            <section className='relative gap-2.5 px-5 sm:px-28 border-t border-b border-[#414141] bg-custom-almostblack w-full z-[0] flex justify-center items-center '>
                <div className='flex flex-col items-center text-center px-5 py-20 sm:py-32  lg:max-w-4xl  gap-10 lg:py-40 w-full'>
                    <h4 className=' common-h4-heading text-custom-white' data-aos="fade-up">Interested in showcasing your brand's collection on Payppy? </h4>
                    <NavigationButtonSmallWhite buttonName="BECOME A PARTNER" href="/become-a-partner" />
                    <Image src={GalaxyBackground} alt='img' quality={100} className=' absolute inset-0 w-full h-full object-cover z-[-1] lg:hidden' />
                    <Image src={StarBackground} alt='img' quality={100} className=' hidden lg:block absolute inset-0 w-full h-full object-cover z-[-1]' />
                </div>
            </section>

            <TextRevealComponent />
        </div>
    )
}

export default LandingPageAllMidSections;



//rushikesh code
// import React from 'react'
// import Image from 'next/image';
// import { Plus_Jakarta_Sans } from 'next/font/google';
// import Link from 'next/link';
// import '@/styles/tailwindcss.css';
// import '@/styles/landingpage/LandingPage.css';
// import '@/styles/Typography.css';


// import Arrow from '@/Images/landingpage/boldArrow.svg';
// //section 1
// import SectionOneImg from "@/Images/landingpage/LandingPageSectionOne.jpg";
// import SectionOneIcon from "@/Images/landingpage/LandinPageSectionOneIcon.png";
// //section 2
// import SectionTwoImg from "@/Images/landingpage/LandingPageSectionTwo.jpg";
// import SectionTwoIcon from "@/Images/landingpage/LandinPageSectionTwoIcon.png";
// //section 3
// import SectionThreeImg from "@/Images/landingpage/LandingPageSectionThree.jpg";
// import SectionThreeIcon from "@/Images/landingpage/LandinPageSectionThreeIcon.svg";
// //section 4
// import Bookmark from "@/Images/landingpage/bookmark.svg";
// import Delivery from "@/Images/landingpage/deliveryIcon.svg";
// import Sustainability from "@/Images/landingpage/substainabilityIcon.svg";
// //section 5
// import InstaImage from "@/Images/landingpage/insta-image.jpg";
// import InstaCircle from '@/Images/landingpage/insta-circle.png';
// import XCircle from '@/Images/landingpage/x-circle.png';
// import TextRevealComponent from '../TextRevealComponent';

// const plus_jakarta_sans = Plus_Jakarta_Sans({
//     subsets: ['latin'],
//     display: 'swap'
// })
// function LandingPageAllMidSections() {
//     return (
//         <>
//             {/* section one  */}
//             <section className={'landing-page-section-one flex flex-col-reverse lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 ' + plus_jakarta_sans.className}>
//                 <main className='landing-section-one-img-box'>
//                     <Image src={SectionOneImg}
//                         width={629}
//                         height={648}
//                         alt="img"
//                         data-aos="fade-up"
//                         className='fav-brands-img'
//                         quality={100}
//                     />
//                 </main>
//                 <main className='landing-section-one-info flex flex-col items-center items-center lg:items-start gap-3 md:gap-6'>
//                     {/* <div> */}
//                     <Image src={SectionOneIcon}
//                         width={73.28}
//                         height={56.26}
//                         alt="img"
//                         data-aos="fade-up"
//                         className='fav-brand-icon'
//                         quality={100}
//                     />
//                     <h5 className="landing-page-section-heading common-h5-heading text-cutom-almostblack text-center lg:text-left " data-aos="fade-up">Follow your favourite brands</h5>
//                     <p className="landing-page-section-one-para common-paragraph text-custom-darkgrey text-center lg:text-left " data-aos="fade-up">Choose what you see, with follow option on every brand.</p>
//                     <VisitPayppyButton />
//                     {/* </div> */}
//                 </main>
//             </section>

//             {/* section two  */}
//             <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 ' + plus_jakarta_sans.className}>
//                 <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start'>
//                     <Image src={SectionTwoIcon}
//                         width={73.28}
//                         height={72}
//                         alt="img"
//                         data-aos="fade-up"
//                         className='earn-reward-icon'
//                         quality={100}
//                     />
//                     <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">Earn sensible rewards</h5>
//                     <p className="landing-page-section-two-para common-paragraph text-custom-darkgrey text-center lg:text-left" data-aos="fade-up">Get equivalent Pepcoins as your checkout value to redeem for your next purchase.</p>
//                     <VisitPayppyButton />
//                 </main>
//                 <main className='landing-section-one-img-box'>
//                     <Image src={SectionTwoImg}
//                         width={629}
//                         height={648}
//                         alt="img"
//                         data-aos="fade-up"
//                         className='earn-reward-img'
//                         quality={100}
//                     />
//                 </main>
//             </section>

//             {/* section three  */}
//             <section className={'landing-page-section-one flex flex-col-reverse lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 ' + plus_jakarta_sans.className}>
//                 <main className='landing-section-one-img-box'>
//                     <Image src={SectionThreeImg}
//                         width={629}
//                         height={648}
//                         alt="img"
//                         data-aos="fade-up"
//                         className='earn-reward-img'
//                         quality={100}
//                     />
//                 </main>
//                 <main className={'landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start ' + plus_jakarta_sans.className}>
//                     {/* <div> */}
//                     <Image src={SectionThreeIcon}
//                         width={61.95}
//                         height={69}
//                         alt="img"
//                         data-aos="fade-up"
//                         className='earn-reward-icon'
//                         quality={100}
//                     />
//                     <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">Refer a friend</h5>
//                     <p className="landing-page-section-three-para common-paragraph text-custom-darkgrey text-center lg:text-left" data-aos="fade-up">Invite your friends on Payppy.app to  get 2500 Pepcoins when they make their first purchase.</p>
//                     <VisitPayppyButton />
//                     {/* </div> */}
//                 </main>
//             </section>

//             {/* section four  */}
//             <section className={'landing-page-section-four  flex  items-center justify-center   ' + plus_jakarta_sans.className}>
//                 <div className="flex flex-col lg:flex-row gap-14 sm:gap-20 px-5 py-20 md:px-10 lg:pt-28 landing-page-section-four-inner-container ">
//                     <div className='flex flex-col gap-4 items-center lg:items-start '>
//                         <Image src={Bookmark}
//                             width={80}
//                             height={80}
//                             alt="img"
//                             data-aos="fade-up"
//                             className='bookmark-icon-img'
//                             quality={100}
//                         />
//                         <div>
//                             <h3 className="bookmark-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Bookmark, don't download</h3>
//                             <p className="bookmark-para common-paragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">We've made lives easier for you and your phone! Simply tap install or the "add to home screen" button on your browser.</p>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-4 items-center lg:items-start'>
//                         <Image src={Delivery}
//                             width={80}
//                             height={80}
//                             alt="img"
//                             data-aos="fade-up"
//                             className='delivery-icon-img'
//                             quality={100}
//                         />
//                         <div>
//                             <h3 className="delivery-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Enjoy deliveries, everywhere</h3>
//                             <p className="delivery-para  common-paragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">We ship across India within 3-6 days so you can get your hands on the Payppy cool stuff at the earliest.</p>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-4 items-center lg:items-start'>
//                         <Image src={Sustainability}
//                             width={80}
//                             height={80}
//                             alt="img"
//                             data-aos="fade-up"
//                             className='sustainability-icon-img'
//                             quality={100}
//                         />
//                         <div>
//                             <h3 className="sustainability-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Choose sustainability</h3>
//                             <p className="sustainability-para  common-paragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">With exclusive, one-of-a-kind packaging, we make sure you reuse more packets unharm Earth a lil.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* section 5 */}
//             <section className={'landing-page-section-five flex flex-col lg:flex-row  items-center lg:items-start  lg:justify-evenly gap-14  lg:gap-4 pt-20 px-5 md:px-10 lg:pt-48 lg:px-40 ' + plus_jakarta_sans.className}>
//                 <main className='flex flex-col gap-4 items-center lg:items-start'>
//                     <h2 className='section-five-title common-h3-heading text-custom-almostblack  text-center lg:text-left mx-auto lg:mx-0' data-aos="fade-up">Level up your scrolling game </h2>
//                     <p className="scrolling-game-para  common-paaragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">and keep up with what’s new by joining a community that's as cool as it is woke </p>
//                     <div className="left-border-div"></div>
//                     <div className="flex flex-col lg:flex-row items-center gap-4">
//                         <p className="scrolling-game-para w-auto  common-paaragraph" data-aos="fade-up">Follow us</p>
//                         <div className='flex gap-4'>
//                             <Link href='https://www.instagram.com/payppy.app/' target='_blank' className='landingpage-insta-twitter-links flex justify-center items-center w-12 h-12' data-aos="fade-up">
//                                 <Image src={InstaCircle}
//                                     width={20}
//                                     height={20}
//                                     alt="img"
//                                     className='sustainability-icon-img'
//                                     quality={100}
//                                 />
//                             </Link>
//                             <Link href='https://x.com/payppy_app?s=21' target='_blank' className='landingpage-insta-twitter-links flex justify-center items-center w-12 h-12' data-aos="fade-up">
//                                 <Image src={XCircle}
//                                     width={20}
//                                     height={20}
//                                     alt="img"
//                                     className='sustainability-icon-img'
//                                     quality={100}
//                                 />
//                             </Link>
//                         </div>
//                     </div>
//                 </main>
//                 <main className='insta-img-container' data-aos="fade-up">
//                     <Image src={InstaImage}
//                         width={400}
//                         height={608.3}
//                         alt="img"
//                         className='insta-img'
//                         quality={100}
//                     />
//                 </main>

//             </section>


//             <TextRevealComponent />
//         </>

//     )
// }


// function VisitPayppyButton() {
//     return (
//         <>
//             <Link href='https://payppy.app/' target='_blank' className='visit-payppy-app-section-btn flex flex-row gap-2' data-aos="fade-up">
//                 <span>VISIT PAYPPY.APP</span>
//                 <Image src={Arrow}
//                     width={14}
//                     height={14}
//                     alt="img"
//                     className='visit-payppy-section-btn-arrow'
//                 />
//             </Link>
//         </>
//     )
// }

// export default LandingPageAllMidSections;

