import { IStatus } from "./status.inteface";
import "./status.css";
const Image = (props: IStatus) => {
  const { isOnline } = props;
  return (
    <span className="status" style={{ color: isOnline ? "green" : "red" }}>
      &bull;{isOnline ? "en ligne" : "Hors ligne"}
    </span>
  );
};

export default Image;
