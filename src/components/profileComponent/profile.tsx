import { IProfile } from "./profile.inteface";
import ImageProfile from "../imageComponent/image";
import Status from "../statusComponent/status";
import "./profile.css";
const Profile = (props: IProfile) => {
  const { name, image, status } = props;
  return (
    <div className="container">
      <ImageProfile src={image.src} alt={image.alt} />
      <Status isOnline={status.isOnline} />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
