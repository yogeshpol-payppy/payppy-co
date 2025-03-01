import React from "react";
import Image from "next/image";

const ProfileCard = ({ imgSrc, hoverImgSrc, profileName, position }) => {
    return (
        <div className=" group gap-5 max-w-[320px] max-h-[370px] w-full h-full sm:gap-6 sm:max-w-[380px] sm:max-h-[440px] flex flex-col items-center">

            <div className="relative w-full h-full" data-aos="fade-up">

                <Image src={imgSrc} alt="Primary Image" quality={100} className="min-w-52 min-h-64 sm:min-w-60 sm:min-h-[305px]  group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0" />

                <Image src={hoverImgSrc} alt="Hover Image" quality={100} className="min-w-52 min-h-64 sm:min-w-60 sm:min-h-[305px] absolute top-0 left-0  opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100" />
            </div>

            <div className="flex flex-col items-center">
                <h6 className="common-h6-heading text-custom-almostblack" data-aos="fade-up">{profileName}</h6>
                <p className="common-paragraph text-custom-placeholder" data-aos="fade-up">{position}</p>
            </div>

        </div>
    );
};

export default ProfileCard;
