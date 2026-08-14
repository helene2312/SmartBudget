import { supabase } from "../../../../lib/supabase";
import type { Entry } from "../../types/entries.types";

export async function createEntry(entry: Entry) {
  const { data, error } = await supabase
    .from("Entries")
    .insert(entry)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
