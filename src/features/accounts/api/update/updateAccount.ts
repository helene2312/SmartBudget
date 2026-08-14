import { supabase } from "../../../../lib/supabase";
import type { Account } from "../../types/account.types";

export async function updateAccount(account: Account) {
  const { data, error } = await supabase
    .from("Accounts")
    .update(account)
    .eq("account_id", account.account_id)
    .select("*");

  if (error) {
    throw error;
  }

  return data ?? [];
}
