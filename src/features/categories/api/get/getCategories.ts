import { supabase } from "../../../../lib/supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("Categories").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCategory(category_id: number) {
  const { data, error } = await supabase
    .from("Categories")
    .select("*")
    .eq("category_id", category_id);

  if (error) {
    throw error;
  }

  return data?.[0] ?? null;
}
