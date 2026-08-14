import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../api/get/getCategories";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
