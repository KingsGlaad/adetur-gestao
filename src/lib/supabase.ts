import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or service key is missing.");
}

if (typeof window !== "undefined") {
  throw new Error("Supabase service key should never be used on the client-side.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);