import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentUpdateManyWithoutImagesInput } from "./CommentUpdateManyWithoutImagesInput";
import { LikeUpdateManyWithoutImagesInput } from "./LikeUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutImagesInput;
  likes?: LikeUpdateManyWithoutImagesInput;
};
