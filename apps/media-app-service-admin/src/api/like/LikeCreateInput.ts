import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type LikeCreateInput = {
  user?: UserWhereUniqueInput | null;
  image?: ImageWhereUniqueInput | null;
};
