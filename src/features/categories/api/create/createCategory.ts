import { supabase } from "../../../../lib/supabase";
import type { Category } from "../../types/categories.types";

export async function createCategory(category: Category) {
  const { data, error } = await supabase
    .from("Categories")
    .insert(category)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
