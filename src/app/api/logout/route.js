import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Delete the login cookie
  response.cookies.set("isLoggedIn", "", {
    path: "/",
    expires: new Date(0),
  });

  return response;
}
