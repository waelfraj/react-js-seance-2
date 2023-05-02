import { useEffect, useState } from "react";
import "./App.css";
import profileImage from "./assets/profileImage.png";
import waelImage from "./assets/wael.jpg";
import Profile from "./components/profileComponent/profile";
import { IProfile } from "./components/profileComponent/profile.inteface";

function App() {
  const [data, setData] = useState<IProfile>({
    name: "Wael Fraj",
    image: { src: waelImage, alt: "image de profile" },
    status: { isOnline: true },
  });

  setTimeout(() => {
    setData({
      image: { src: profileImage, alt: "image de profile" },
      name: "UserName",
      status: { isOnline: false },
    });
  }, 5000);

  return (
    <div>
      <Profile
        name={data.name}
        image={data.image}
        status={data.status}
      ></Profile>
    </div>
  );
}

export default App;
