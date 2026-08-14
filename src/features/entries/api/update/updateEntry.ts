import { supabase } from "../../../../lib/supabase";
import type { Entry } from "../../types/entries.types";

export async function updateEntry(entry: Entry) {
  const { data, error } = await supabase
    .from("Entries")
    .update(entry)
    .eq("entry_id", entry.entry_id)
    .select("*");

  if (error) {
    throw error;
  }

  return data ?? [];
}
