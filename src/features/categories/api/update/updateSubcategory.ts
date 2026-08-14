import { supabase } from "../../../../lib/supabase";
import type { Subcategory } from "../../types/categories.types";

export async function updateSubcategory(subcategory: Subcategory) {
  const { data, error } = await supabase
    .from("Subcategories")
    .update(subcategory)
    .eq("subcategory_Id", subcategory.subcategory_Id)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
