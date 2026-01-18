import { cookies } from "next/headers";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const cookieStore = await cookies();
  const isLoggedInCookie = cookieStore.get("isLoggedIn");
  const isLoggedIn = isLoggedInCookie?.value === "true";

  
  return <Navbar isLoggedIn={isLoggedIn} />;
}