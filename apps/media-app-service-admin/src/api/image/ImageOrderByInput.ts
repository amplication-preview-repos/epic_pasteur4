import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
