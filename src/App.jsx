import React, { useState, useEffect } from "react";
import Card from "./component/Card";
import bg1 from "../public/bg-pattern-top.svg";
import bg2 from "../public/bg-pattern-bottom.svg";

function App() {
  const [profileData] = useState([
    {
      profileId: "fem-001",
      name: "Victor Crest",
      age: 26,
      location: "London",
      followers: 80000,
      likes: 802652,
      photos: 1426,
      profilePhoto: "./image-victor.jpg",
      coverPhoto: "./bg-pattern-card.svg",
    },
    // Add more profiles as needed
  ]);

  const getPeople = profileData.find(
    (profile) => profile.profileId === "fem-001"
  );

  console.log(getPeople);

  // const [profileData, setProfileData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("../src/db/data.json");
  //       const data = await response.json();
  //       setProfileData(data.profiles);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (!profileData) {
  //   return;
  //   <div> Loading..</div>;
  // }
  // console.log(profileData);
  // const getPeople = profileData.find(
  //   (profile) => profile.profileId === "fem-001"
  // );
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-darkCyan">
      <img
        src={bg1}
        className="absolute z-10  -left-1/2 -top-32 sm:-left-72 sm:-top-1/2"
      />
      <img
        src={bg2}
        className="absolute z-10 -right-1/2 -bottom-32  sm:-right-72 sm:-bottom-1/2"
      />
      <div className="absolute inset-0 z-20 ">
        <Card profile={getPeople} />
      </div>
    </div>
  );
}

export default App;
