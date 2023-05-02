import { IImage } from "./image.inteface";
import "./image.css";

const ImageProfile = (props: IImage) => {
  const { src, alt } = props;
  return <img className="avatar" src={src} alt={alt} />;
};

export default ImageProfile;
