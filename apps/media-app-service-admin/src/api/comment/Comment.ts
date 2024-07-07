import { Image } from "../image/Image";
import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  image?: Image | null;
  user?: User | null;
};
