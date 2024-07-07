import { User } from "../user/User";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
  comments?: Array<Comment>;
  likes?: Array<Like>;
};
