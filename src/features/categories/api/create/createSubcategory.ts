import { supabase } from "../../../../lib/supabase";
import type { Subcategory } from "../../types/categories.types";

export async function createSubcategory(subcategory: Subcategory) {
  const { data, error } = await supabase
    .from("Subcategories")
    .insert(subcategory)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
