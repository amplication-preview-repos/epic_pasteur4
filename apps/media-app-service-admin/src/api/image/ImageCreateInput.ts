import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentCreateNestedManyWithoutImagesInput } from "./CommentCreateNestedManyWithoutImagesInput";
import { LikeCreateNestedManyWithoutImagesInput } from "./LikeCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutImagesInput;
  likes?: LikeCreateNestedManyWithoutImagesInput;
};
