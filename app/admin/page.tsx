import { auth } from "app/auth";
import { getGuestbookEntries } from "app/db/queries";
import { redirect } from "next/navigation";
import Form from "./form";

export const metadata = {
  title: "Admin",
};

export default async function GuestbookPage() {
  let session = await auth();
  if (session?.user?.email !== "me@studycraft.dev") {
    redirect("/");
  }

  let entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
