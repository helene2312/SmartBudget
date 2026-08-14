import { supabase } from "../../../../lib/supabase";

export async function deleteAccountById(account_Id: string) {
  const { data, error } = await supabase
    .from("Accounts")
    .delete()
    .eq("account_id", account_Id)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
