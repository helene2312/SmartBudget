import { supabase } from "../../../../lib/supabase";

export async function getUserById(userId: string) {
    const { data, error } = await supabase
        .from("Users")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        throw error;
    }

    return data ?? [];
}
