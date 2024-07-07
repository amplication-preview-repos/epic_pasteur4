import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  image?: ImageWhereUniqueInput;
};
