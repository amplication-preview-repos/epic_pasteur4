import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  preferences?: JsonFilter;
  images?: ImageListRelationFilter;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
};
