import { IProfile } from "./profile.inteface";
import ImageProfile from "../imageComponent/image";
import Status from "../statusComponent/status";

const Profile = (props: IProfile) => {
  const { name, image, status } = props;
  return (
    <table>
      <tr>
        <td>
          <ImageProfile src={image.src} alt={image.alt} />
        </td>
      </tr>
      <tr>
        <td>{name}</td>
        <td>
          <Status isOnline={status.isOnline} />
        </td>
      </tr>
    </table>
  );
};

export default Profile;
