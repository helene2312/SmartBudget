import { supabase } from "../../../../lib/supabase";

export async function deleteEntryById(entryId: string) {
  const { data, error } = await supabase
    .from("Entries")
    .delete()
    .eq("entry_id", entryId)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
