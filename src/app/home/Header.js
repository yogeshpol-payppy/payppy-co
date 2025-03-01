'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Turn as Hamburger, Turn } from 'hamburger-react'
import { Plus_Jakarta_Sans } from 'next/font/google';

//Images
import LOGO from '@/Images/payppyhomepage/navbarPayppyLogo.svg';
import Copy from '@/Images/payppyhomepage/file-copy-line.png';
import LinkedIn from '@/Images/payppyhomepage/mdi_linkedin.svg';
import Instagram from '@/Images/payppyhomepage/instagram.svg';
import Twitter from '@/Images/payppyhomepage/twitter.svg';
import Map from '@/Images/payppyhomepage/map.svg';
import Arrow from '@/Images/payppyhomepage/arrow-down-s-line.png';
import TogglerIcon from '@/Images/payppyhomepage/navbarTogglerIcon.svg';

//Components
import { toast, Bounce } from 'react-toastify';
import CopyToClipboard from 'react-copy-to-clipboard';


//css
import '@/styles/Typography.css';
import "@/styles/payppyhomepage/Homepage2.0.css";
import 'react-toastify/dist/ReactToastify.css';


const ToastContainer = dynamic(() => import('react-toastify').then(obj => obj.ToastContainer), { ssr: false });

//font
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap'
});

function Header() {

  let [togglerState, setToglerState] = useState(false);
  let [senseiStudioState, setSenseiStudioState] = useState(false);
  let [payppyAppState, setPayppyAppState] = useState(false);

  let [currentPath, setCurrentPath] = useState('');
  // let currentPath=window.location.pathname;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      //this code runs only on the client-side so it will not create problem during build process
      setCurrentPath(window.location.pathname);
    }
  }, []);


  useEffect(() => {
    if (togglerState) {
      document.body.classList.add('body-scroll-none');    //if the navbar toggler icon is clicked body will no scroll
    }
    else {
      document.body.classList.remove('body-scroll-none');   //if the navbar toggler icon is clicked again body will scroll
    }

    return () => {
      document.body.classList.remove('body-scroll-none');   //when the component will unmount then this body scroll class will get removed
    }
  }, [togglerState]);



  function handleCopyToClipboard() {
    toast.success('Copied to Clipboard', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  //if user click a link in navbar of current active page link again 
  function toRefreshPage(path) {
    if (currentPath === path) {
      window.location.reload();
    }
  }

  function handleSenseiStudio() {
    setPayppyAppState(false);
    setSenseiStudioState(!senseiStudioState);
  }

  function handlePayppyApp() {
    setSenseiStudioState(false);
    setPayppyAppState(!payppyAppState);
  }

  return (
    <header className={`homepage-2-header relative ${senseiStudioState && togglerState ? ' payppy-bg-custom-primary ' : ' bg-custom-almostblack '}` + plus_jakarta_sans.className}  >
      <nav className='flex items-center '>
        <div className='payppy-logo-2-container flex items-center' >
          <Link href='/'>
            <Image src={LOGO}
              width={192}
              height={28}
              alt='img'
              className='payppy-logo-2' />
          </Link>
        </div>
        <div className='toggler-icon-container flex items-center justify-end' onClick={() => { setToglerState(!togglerState) }}>
          {/* <Image src={TogglerIcon}
                width={32}
                height={32}
                className='toggler-icon-2'/> */}
          <Turn toggled={togglerState} toggle={setToglerState} color="#FFFFFF" easing="ease-in" size={24} />
        </div>
      </nav>
      <section className={`payppyhomepage-header-section absolute pt-12 sm:pt-16 pb-24 lg:pt-10 xl:pb-6 px-5 sm:px-20 flex flex-col justify-between gap-8 items-start lg:items-center ${togglerState ? "payppy-header-with-height" : ""} ${senseiStudioState ? 'payppy-bg-custom-primary ' : ''}`}>

        <main className='flex flex-col items-start lg:items-center gap-8 sm:gap-11 flex-wrap'>

          <Link href='/about' prefetch={true} className={`common-h3-heading  text-left lg:text-center payppy-header-links ${senseiStudioState ? ' text-opacity ' : ' text-custom-almostwhite '} `} onClick={() => { toRefreshPage('/get-to-know-us') }} >About</Link>

          <Link href='/become-a-partner' prefetch={true} className={`common-h3-heading  text-left lg:text-center payppy-header-links ${senseiStudioState ? ' text-opacity ' : ' text-custom-almostwhite '} `} onClick={() => { toRefreshPage('/get-to-know-us') }} >For Brands</Link>
          
        </main>

        <footer className="payppy-homepage-header-footer  pt-5 pb-8 lg:pb-0  flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ">
          <div className='flex gap-1.5 relative'>
            <p className="common-paragraph text-custom-ghostgrey">Contact us:</p>
            <p className="common-paragraph text-custom-white font-bold">hello@payppy.co</p>
            <CopyToClipboard text='hello@payppy.co' >
              <Image src={Copy}
                width={24}
                height={26}
                alt='img'
                className='cursor-pointer max-w-none max-h-none copytoclipboard-btn'
                onClick={handleCopyToClipboard}
              />
            </CopyToClipboard>
          </div>
          <div className='flex gap-4 sm:gap-3'>
            <div className="header-bottom-logos-container">
              <Link href='https://www.linkedin.com/company/payppy' target='_blank'>
                <Image src={LinkedIn}
                  width={23}
                  height={23}
                  alt='linedin'
                />
              </Link>
            </div>
            <Link href='https://www.instagram.com/payppy.app/' target='_blank'>
              <div className="header-bottom-logos-container">
                <Image src={Instagram}
                  width={23}
                  height={23}
                  alt='instagram'
                />
              </div>
            </Link>
            <Link href='https://x.com/payppy_app?s=21' target='_blank' >
              <div className="header-bottom-logos-container">
                <Image src={Twitter}
                  width={23}
                  height={23}
                  alt='x'
                />
              </div>
            </Link>
            <Link href='https://maps.app.goo.gl/xH1RM6PfBjQYEmqi9' target='_blank'>
              <div className="header-bottom-logos-container">
                <Image src={Map}
                  width={23}
                  height={23}
                  alt='map'
                />
              </div>
            </Link>
          </div>
        </footer>

      </section>
      <ToastContainer />
    </header>
  )
}


export default Header;

