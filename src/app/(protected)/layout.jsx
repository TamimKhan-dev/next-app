import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("isLoggedIn");

  if (!isLoggedIn || isLoggedIn.value !== "true") {
    redirect("/login");
  }

  return <>{children}</>;
}