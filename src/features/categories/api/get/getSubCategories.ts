import { supabase } from "../../../../lib/supabase";

export async function getSubcategories() {
  const { data, error } = await supabase.from("Subcategories").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getSubcategory(subcategory_Id: number) {
  const { data, error } = await supabase
    .from("Subcategories")
    .select("*")
    .eq("subcategory_Id", subcategory_Id);

  if (error) {
    throw error;
  }

  return data?.[0] ?? null;
}
