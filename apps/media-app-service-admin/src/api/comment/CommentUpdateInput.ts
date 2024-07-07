import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  image?: ImageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
