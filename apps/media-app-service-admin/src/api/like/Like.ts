import { User } from "../user/User";
import { Image } from "../image/Image";

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  image?: Image | null;
};
