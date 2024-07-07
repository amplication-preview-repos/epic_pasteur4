import { InputJsonValue } from "../../types";
import { ImageUpdateManyWithoutUsersInput } from "./ImageUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  fullName?: string | null;
  preferences?: InputJsonValue;
  images?: ImageUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
};
