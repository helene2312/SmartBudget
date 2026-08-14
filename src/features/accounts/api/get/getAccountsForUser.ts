import { supabase } from "../../../../lib/supabase";

export async function getAccountsForUser(user_Id: string) {
  const { data, error } = await supabase
    .from("Accounts")
    .select("*")
    .eq("user_id_fk", user_Id);

  if (error) {
    throw error;
  }

  return data ?? [];
}
