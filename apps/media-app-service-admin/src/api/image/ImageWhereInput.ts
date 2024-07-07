import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type ImageWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
};