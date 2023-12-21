import React, { useState, useEffect } from "react";
import Card from "./component/Card";

function App() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../src/db/data.json");
        const data = await response.json();
        setProfileData(data.profiles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(profileData);

  if (!profileData) {
    return;
    <div> Loading..</div>;
  }

  const getPeople = profileData.find(profile => profile.profileId === 'fem-001')


  return (
    <div>
      <Card profile={getPeople} />
    </div>
  );
}

export default App;
