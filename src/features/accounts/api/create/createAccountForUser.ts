import { supabase } from "../../../../lib/supabase";
import type { Account } from "../../types/account.types";

export async function createAccountForUser(account: Account) {
  const { data, error } = await supabase
    .from("Accounts")
    .insert(account)
    .select("*");

  if (error) {
    throw error;
  }

  return data[0];
}
