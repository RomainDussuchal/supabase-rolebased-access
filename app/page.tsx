import SignOut from "@/components/SignOut";
import { createClient } from "@/utils/supabase/server";

import Link from "next/link";

export default async function Home() {
  const supabase = createClient();

  const { data: tweets } = await supabase.from("Tweets").select("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to Supabase + Next.js</h1>
        <p className="text-lg text-center sm:text-left">
          This is an example project showing how to use Supabase with Next.js.
        </p>
        <Link href="/login">Log In</Link>
        <Link href="/private">Test Private</Link>
        <SignOut />
        {tweets && <pre>{JSON.stringify(tweets, null, 2)}</pre>}
      </main>
    </div>
  );
}
