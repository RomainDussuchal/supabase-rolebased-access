"use client";

import { createClient } from "@/utils/supabase/client";

const SignOut = () => {
  const supabase = createClient();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    console.log("signed out");
  };
  return <button onClick={handleSignOut}>SignOut</button>;
};

export default SignOut;
