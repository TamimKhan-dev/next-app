import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@comtech.com" && password === "tamimKhan@#$") {
    const response = NextResponse.json({ success: true });

    response.cookies.set("isLoggedIn", "true", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 },
  );
}
