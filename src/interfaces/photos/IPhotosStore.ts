import { IPhotos } from "./IPhotos";
import { ERequestStatus } from "../../enums/ERequestStatus";

export interface IPhotosStore {
  current: IPhotos[] | null;
  status: ERequestStatus;
}
