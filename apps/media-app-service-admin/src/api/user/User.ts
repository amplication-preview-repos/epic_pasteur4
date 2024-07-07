import { JsonValue } from "type-fest";
import { Image } from "../image/Image";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  fullName: string | null;
  preferences: JsonValue;
  images?: Array<Image>;
  comments?: Array<Comment>;
  likes?: Array<Like>;
};
