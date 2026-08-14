import { useQuery } from "@tanstack/react-query";
import { getSubcategories } from "../api/get/getSubCategories";

export function useSubcategories() {
  return useQuery({
    queryKey: ["subcategories"],
    queryFn: getSubcategories,
  });
}
