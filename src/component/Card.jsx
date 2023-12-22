import React from "react";

const Card = ({ profile }) => {
  const formatNumber = (number) => {
    return number >= 1000000
      ? (number / 1000000).toFixed(1) + "M"
      : number <= 10000
      ? (number / 1000).toFixed(1) + "K"
      : number >= 1000
      ? (number / 1000).toFixed(0) + "K"
      : number.toString();
  };

  return (
    <div className="h-screen grid place-content-center">
      <div className="flex flex-col items-center w-[350px] bg-white">
        <div className="flex flex-col items-center py-5">
          <img src={profile.coverPhoto} alt="Cover" className="absolute -z-10 top-36 rounded-tl-xl rounded-tr-xl" />
          <img src={profile.profilePhoto} alt="Profile" className="rounded-full border-[5px] border-white"/>
          <div className="flex flex-row gap-3">
            <h1 className="font-theme font-bold text-xl">{profile.name}</h1>
            <p className="font-theme text-xl text-darkGray">{profile.age}</p>
          </div>
          <p className="font-theme text-base text-darkGray">{profile.location}</p>
        </div>
        <div className="flex flex-row gap-10 border w-[350px]">
          <div className="flex flex-col items-center">
          <p className="font-theme font-bold text-xl">{formatNumber(profile.followers)}</p>
          <p className="font-theme font-normal text-xs tracking-widest  text-darkGray">Followers</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="font-theme font-bold text-xl">{formatNumber(profile.likes)}</p>
          <p className="font-theme font-normal text-xs tracking-widest  text-darkGray">Likes</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="font-theme font-bold text-xl">{formatNumber(profile.photos)}</p>
          <p className="font-theme font-normal text-xs tracking-widest  text-darkGray">Photos</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
