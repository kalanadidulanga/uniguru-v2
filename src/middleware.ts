import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export default auth((req: NextRequest) => {
  // Your custom middleware logic here, if any
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|study-destinations).*)",
  ],
};
