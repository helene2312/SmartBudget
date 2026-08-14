import { supabase } from "../../../../lib/supabase";
import type { Subcategory } from "../../types/categories.types";

export async function deleteSubcategory(subcategory: Subcategory) {
  const { data, error } = await supabase
    .from("Subcategories")
    .delete()
    .eq("subcategory_Id", subcategory.subcategory_Id)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
