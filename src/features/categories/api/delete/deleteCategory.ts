import { supabase } from "../../../../lib/supabase";
import type { Category } from "../../types/categories.types";

export async function deleteCategory(category: Category) {
  const { data, error } = await supabase
    .from("Categories")
    .delete()
    .eq("category_id", category.category_id)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
