import { IImage } from "../imageComponent/image.inteface";
import { IStatus } from "../statusComponent/status.inteface";
export interface IProfile {
  name: string;
  image: IImage;
  status: IStatus;
}
