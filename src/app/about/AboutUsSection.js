
//css
import '@/styles/Typography.css';

//Font
import { Plus_Jakarta_Sans } from "next/font/google";

//Components
import ProfileCard from "@/components/ProfileCard";
import TextRevealComponent from "../TextRevealComponent";

//Images
import Profile1 from '@/Images/aboutpage/satyen.webp';
import Profile1Hover from '@/Images/aboutpage/satyen-hover.webp';

import Profile2 from '@/Images/aboutpage/mohini.webp';
import Profile2Hover from '@/Images/aboutpage/mohini-hover.webp';

import Profile3 from '@/Images/aboutpage/omkar.webp';
import Profile3Hover from '@/Images/aboutpage/omkar-hover.webp';

import Profile4 from '@/Images/aboutpage/antara.webp';
import Profile4Hover from '@/Images/aboutpage/antara-hover.webp';

import Profile6 from '@/Images/aboutpage/rushikesh.webp';
import Profile6Hover from '@/Images/aboutpage/rushikesh-hover.webp';

import Profile7 from '@/Images/aboutpage/hardik.webp';
import Profile7Hover from '@/Images/aboutpage/hardik-hover.webp';

import Profile8 from '@/Images/aboutpage/yogesh.webp';
import Profile8Hover from '@/Images/aboutpage/yogesh-hover.webp';

import Profile9 from '@/Images/aboutpage/suraj.webp';
import Profile9Hover from '@/Images/aboutpage/suraj-hover.webp';

import Profile10 from '@/Images/aboutpage/sakshi.webp';
import Profile10Hover from '@/Images/aboutpage/sakshi-hover.webp';

import Profile11 from '@/Images/aboutpage/akshay.webp';
import Profile11Hover from '@/Images/aboutpage/akshay-hover.webp';



const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})

function AboutUsPageSection() {

    return (
        <>
            <div className={" " + plus_jakarta_sans.className}>
                {/* section 1 */}
                <section className=" border-t border-[#DDDDDD] gap-12 py-20 px-5 sm:px-10 lg:py-32 lg:px-20 ">

                    <div className=" gap-12 lg:max-w-4xl flex flex-col items-center w-full  lg:px-0 mx-auto ">
                        <h4 className="common-h4-heading text-custom-almostblack text-balance" data-aos="fade-up">We're a dynamic team of designers, developers, and creative minds, always making products that make sense!</h4>
                        <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">
                            At Payppy, we’re a diverse team passionate about design and creating exceptional experiences. Specializing in fashion and B2C fintech products, we bridge the gap between design and business to deliver impactful solutions. <br /> <br />  More than just a team, we’re a squad. Our collaborative culture fosters creativity and growth, allowing us to shape industries and make a lasting impact.
                        </p>
                    </div>

                </section>

                {/* section 2 */}
                <section className="bg-custom-almostwhite py-20 px-5 sm:py-28 sm:px-10 lg:px-20 about-us-section-2-grid-box">

                    <div className="flex flex-col gap-20 lg:max-w-4xl w-full mx-auto">

                        <h2 className="common-h2-heading text-custom-almostblack max-w-[320px] sm:max-w-full w-full" data-aos="fade-up">Practising it while preaching it</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-x-32 sm:gap-y-14 ">

                            <div className=" border-t border-[#DDDDDD] order-1  ">
                                <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[240px] sm:max-w-[272px] w-full" data-aos="fade-up">Teamwork makes the dreamwork</h5>
                                <p className="common-paragraph text-custom-darkgrey max-w-[300px] sm:max-w-[291px] w-full " data-aos="fade-up">Our team is the wand with which, all the magic is created</p>
                            </div>

                            <div className=" border-t border-[#DDDDDD] order-3 sm:order-2 ">
                                <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[320px] sm:max-w-[220px] w-full" data-aos="fade-up">Super Gen Z, super funsie</h5>
                                <p className="common-paragraph text-custom-darkgrey max-w-[320px] sm:max-w-[272px] w-full" data-aos="fade-up">We stay creative, curious and open to ideas, always</p>
                            </div>

                            <div className=" border-t border-[#DDDDDD] order-2 sm:order-3 ">
                                <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[320px] sm:max-w-[197px] w-full" data-aos="fade-up">Work hard, play harder</h5>
                                <p className="common-paragraph text-custom-darkgrey max-w-[320px] sm:max-w-[272px] w-full " data-aos="fade-up">We take our play hours seriously, ‘cuz why not</p>
                            </div>

                            <div className=" border-t border-[#DDDDDD] order-4 ">
                                <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[320px] sm:max-w-[272px] w-full" data-aos="fade-up">Purpose, passion, blah blah</h5>
                                <p className="common-paragraph text-custom-darkgrey max-w-[320px]  sm:max-w-[272px] w-full " data-aos="fade-up">We care about the classic values in everything we do</p>
                            </div>

                        </div>
                    </div>
                </section>


                {/* section 3 */}
                <section className=" w-full flex flex-col items-center mx-auto">

                    <div className=" gap-10 py-10 px-5 sm:py-20 flex items-center">
                        <h3 className="common-h3-heading text-custom-almost-black text-center" data-aos="fade-up">Meet the Payppy Squad</h3>
                    </div>

                    <div className=" pb-7 sm:pb-20 gap-y-7 sm:gap-y-0  grid grid-cols-1 sm:grid-cols-2 ">
                        <ProfileCard imgSrc={Profile1} hoverImgSrc={Profile1Hover} profileName="Satyen Aghor" position="Co-Founder and CEO, Payppy" />
                        <ProfileCard imgSrc={Profile2} hoverImgSrc={Profile2Hover} profileName="Mohini Aghor" position="Co-Founder and CMO, Payppy" />
                    </div>

                    <div className=" gap-y-7 sm:gap-y-20  pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                        <ProfileCard imgSrc={Profile3} hoverImgSrc={Profile3Hover} profileName="Omkar Ghodke" position="Mid-Senior Product Designer" />
                        <ProfileCard imgSrc={Profile4} hoverImgSrc={Profile4Hover} profileName="Antra Dhotre" position="Fashion Designer" />
                        {/* <ProfileCard imgSrc={Profile5} hoverImgSrc={Profile5Hover} profileName="Nirnay Vanjari" position="Jr-Mid Product Designer" /> */}
                        <ProfileCard imgSrc={Profile7} hoverImgSrc={Profile7Hover} profileName="Hardik Vansh" position="Head of Acquisition" />
                        <ProfileCard imgSrc={Profile6} hoverImgSrc={Profile6Hover} profileName="Rushikesh Pol" position="Front-End Developer" />
                        <ProfileCard imgSrc={Profile10} hoverImgSrc={Profile10Hover} profileName="Sakshi Aghor" position="Accountant" />
                        <ProfileCard imgSrc={Profile8} hoverImgSrc={Profile8Hover} profileName="Yogesh Pol" position="Front-End Developer" />
                    </div>

                    <div className=" pb-7 sm:pb-20 gap-y-7 sm:gap-y-0  grid grid-cols-1 sm:grid-cols-2 ">
                        <ProfileCard imgSrc={Profile9} hoverImgSrc={Profile9Hover} profileName="Suraj Sakhare" position="Back-End Developer" />
                        <ProfileCard imgSrc={Profile11} hoverImgSrc={Profile11Hover} profileName="Akshay Ambulgekar" position="Back-End Developer" />
                    </div>

                </section>

                <TextRevealComponent />
            </div>
        </>
    )
}

export default AboutUsPageSection;


// //css
// import '@/styles/Typography.css';

// //Font
// import { Plus_Jakarta_Sans } from "next/font/google";

// //Components
// import ProfileCard from "@/components/ProfileCard";
// import TextRevealComponent from "../TextRevealComponent";

// //Images
// import Profile1 from '@/Images/aboutpage/satyen.webp';
// import Profile1Hover from '@/Images/aboutpage/satyen-hover.webp';

// import Profile2 from '@/Images/aboutpage/mohini.webp';
// import Profile2Hover from '@/Images/aboutpage/mohini-hover.webp';

// import Profile3 from '@/Images/aboutpage/omkar.webp';
// import Profile3Hover from '@/Images/aboutpage/omkar-hover.webp';

// import Profile4 from '@/Images/aboutpage/antara.webp';
// import Profile4Hover from '@/Images/aboutpage/antara-hover.webp';

// import Profile5 from '@/Images/aboutpage/nirnay.webp';
// import Profile5Hover from '@/Images/aboutpage/nirnay-hover.webp';

// import Profile6 from '@/Images/aboutpage/rushikesh.webp';
// import Profile6Hover from '@/Images/aboutpage/rushikesh-hover.webp';

// import Profile7 from '@/Images/aboutpage/hardik.webp';
// import Profile7Hover from '@/Images/aboutpage/hardik-hover.webp';

// import Profile8 from '@/Images/aboutpage/yogesh.webp';
// import Profile8Hover from '@/Images/aboutpage/yogesh-hover.webp';

// import Profile9 from '@/Images/aboutpage/suraj.webp';
// import Profile9Hover from '@/Images/aboutpage/suraj-hover.webp';

// import Profile10 from '@/Images/aboutpage/sakshi.webp';
// import Profile10Hover from '@/Images/aboutpage/sakshi-hover.webp';

// import Profile11 from '@/Images/aboutpage/akshay.webp';
// import Profile11Hover from '@/Images/aboutpage/akshay-hover.webp';



// const plus_jakarta_sans = Plus_Jakarta_Sans({
//     subsets: ['latin'],
//     display: 'swap'
// })

// function AboutUsPageSection() {

//     return (
//         <>
//             <div className={" " + plus_jakarta_sans.className}>
//                 {/* section 1 */}
//                 <section className=" border-t border-[#DDDDDD] gap-12 py-20 px-5 sm:px-10 lg:py-32 lg:px-20 ">

//                     <div className=" gap-12 lg:max-w-4xl flex flex-col items-center w-full  lg:px-0 mx-auto ">
//                         <h4 className="common-h4-heading text-custom-almostblack text-balance" data-aos="fade-up">We're a dynamic team of designers, developers, and creative minds, always making products that make sense!</h4>
//                         <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">
//                             At Payppy, we’re a diverse team passionate about design and creating exceptional experiences. Specializing in fashion and B2C fintech products, we bridge the gap between design and business to deliver impactful solutions. <br /> <br />  More than just a team, we’re a squad. Our collaborative culture fosters creativity and growth, allowing us to shape industries and make a lasting impact.
//                         </p>
//                     </div>

//                 </section>

//                 {/* section 2 */}
//                 <section className="bg-custom-almostwhite py-20 px-5 sm:py-28 sm:px-10 lg:px-20 about-us-section-2-grid-box">

//                     <div className="flex flex-col gap-20 lg:max-w-4xl w-full mx-auto">

//                         <h2 className="common-h2-heading text-custom-almostblack max-w-[320px] sm:max-w-full w-full" data-aos="fade-up">Practising it while preaching it</h2>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-x-32 sm:gap-y-14 ">

//                             <div className=" border-t border-[#DDDDDD] order-1  ">
//                                 <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[240px] sm:max-w-[272px] w-full" data-aos="fade-up">Teamwork makes the dreamwork</h5>
//                                 <p className="common-paragraph text-custom-darkgrey max-w-[300px] sm:max-w-[291px] w-full " data-aos="fade-up">Our team is the wand with which, all the magic is created</p>
//                             </div>

//                             <div className=" border-t border-[#DDDDDD] order-3 sm:order-2 ">
//                                 <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[320px] sm:max-w-[220px] w-full" data-aos="fade-up">Super Gen Z, super funsie</h5>
//                                 <p className="common-paragraph text-custom-darkgrey max-w-[320px] sm:max-w-[272px] w-full" data-aos="fade-up">We stay creative, curious and open to ideas, always</p>
//                             </div>

//                             <div className=" border-t border-[#DDDDDD] order-2 sm:order-3 ">
//                                 <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[320px] sm:max-w-[197px] w-full" data-aos="fade-up">Work hard, play harder</h5>
//                                 <p className="common-paragraph text-custom-darkgrey max-w-[320px] sm:max-w-[272px] w-full " data-aos="fade-up">We take our play hours seriously, ‘cuz why not</p>
//                             </div>

//                             <div className=" border-t border-[#DDDDDD] order-4 ">
//                                 <h5 className="common-h5-heading text-custom-almost-black my-5 max-w-[320px] sm:max-w-[272px] w-full" data-aos="fade-up">Purpose, passion, blah blah</h5>
//                                 <p className="common-paragraph text-custom-darkgrey max-w-[320px]  sm:max-w-[272px] w-full " data-aos="fade-up">We care about the classic values in everything we do</p>
//                             </div>

//                         </div>
//                     </div>
//                 </section>


//                 {/* section 3 */}
//                 <section className=" w-full flex flex-col items-center mx-auto">

//                     <div className=" gap-10 py-10 px-5 sm:py-20 flex items-center">
//                         <h3 className="common-h3-heading text-custom-almost-black text-center" data-aos="fade-up">Meet the Payppy Squad</h3>
//                     </div>

//                     <div className=" pb-7 sm:pb-20 gap-y-7 sm:gap-y-0  grid grid-cols-1 sm:grid-cols-2  ">
//                         <ProfileCard imgSrc={Profile1} hoverImgSrc={Profile1Hover} profileName="Satyen Aghor" position="Co-Founder and CEO, Payppy" />
//                         <ProfileCard imgSrc={Profile2} hoverImgSrc={Profile2Hover} profileName="Mohini Aghor" position="Co-Founder and CMO, Payppy" />
//                     </div>

//                     <div className=" gap-y-7 sm:gap-y-20  pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
//                         <ProfileCard imgSrc={Profile3} hoverImgSrc={Profile3Hover} profileName="Omkar Ghodke" position="Mid-Senior Product Designer" />
//                         <ProfileCard imgSrc={Profile4} hoverImgSrc={Profile4Hover} profileName="Antra Dhotre" position="Fashion Designer" />
//                         <ProfileCard imgSrc={Profile5} hoverImgSrc={Profile5Hover} profileName="Nirnay Vanjari" position="Jr-Mid Product Designer" />
//                         <ProfileCard imgSrc={Profile6} hoverImgSrc={Profile6Hover} profileName="Rushikesh Pol" position="Front-End Developer" />
//                         <ProfileCard imgSrc={Profile7} hoverImgSrc={Profile7Hover} profileName="Hardik Vansh" position="Head of Acquisition" />
//                         <ProfileCard imgSrc={Profile8} hoverImgSrc={Profile8Hover} profileName="Yogesh Pol" position="Front-End Developer" />
//                         <ProfileCard imgSrc={Profile9} hoverImgSrc={Profile9Hover} profileName="Suraj Sakhare" position="Back-End Developer" />
//                         <ProfileCard imgSrc={Profile10} hoverImgSrc={Profile10Hover} profileName="Sakshi Aghor" position="Accountant" />
//                         <div className="sm:col-span-full sm:flex sm:justify-center sm:items-center lg:col-span-1 lg:flex lg:justify-start lg:items-start"> <ProfileCard imgSrc={Profile11} hoverImgSrc={Profile11Hover} profileName="Akshay Ambulgekar" position="Back-End Developer" /></div>
//                     </div>

//                 </section>

//                 <TextRevealComponent />
//             </div>
//         </>
//     )
// }

// export default AboutUsPageSection;
