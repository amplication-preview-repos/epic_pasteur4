import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type LikeUpdateInput = {
  user?: UserWhereUniqueInput | null;
  image?: ImageWhereUniqueInput | null;
};
