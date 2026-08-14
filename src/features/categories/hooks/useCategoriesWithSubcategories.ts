import { useQuery } from "@tanstack/react-query";
import { getCategoriesWithSubcategories } from "../api/get/getCategoriesWithSubcategories";

export function useCategoriesWithSubcategories() {
  return useQuery({
    queryKey: ["categoriesWithSubcategories"],
    queryFn: getCategoriesWithSubcategories,
  });
}
