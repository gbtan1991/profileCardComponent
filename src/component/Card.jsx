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
      <div className="flex flex-col items-center  w-[350px] bg-white  rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl ">
        <div className="flex flex-col items-center relative">
          <img
            src={profile.coverPhoto}
            alt="Cover"
            className="rounded-tl-xl rounded-tr-xl"
          />
          <img
            src={profile.profilePhoto}
            alt="Profile"
            className="absolute top-20 rounded-full border-[5px] border-white"
          />
          <div className="flex flex-row gap-3 pt-16">
            <h1 className="font-theme font-bold text-xl">{profile.name}</h1>
            <p className="font-theme text-xl text-darkGray">{profile.age}</p>
          </div>
          <p className="font-theme text-base text-darkGray pb-6">
            {profile.location}
          </p>
        </div>
        <div className="flex flex-row gap-10 justify-center p-6 rounded-bl-xl rounded-br-xl border border-b-0 border-r-0 border-l-0 w-[350px]">
          <div className="flex flex-col items-center rounded-bl-xl rounded-br-xl ">
            <p className="font-theme font-bold text-xl">
              {formatNumber(profile.followers)}
            </p>
            <p className="font-theme font-normal text-xs tracking-widest  text-darkGray">
              Followers
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="font-theme font-bold text-xl">
              {formatNumber(profile.likes)}
            </p>
            <p className="font-theme font-normal text-xs tracking-widest  text-darkGray">
              Likes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-theme font-bold text-xl">
              {formatNumber(profile.photos)}
            </p>
            <p className="font-theme font-normal text-xs tracking-widest  text-darkGray">
              Photos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
