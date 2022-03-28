import { NextResponse } from "next/server";
import { appUrl } from "../lib/config";

export default async function middleware(request) {
  if (
    !request.cookies["token"] &&
    request.url !== appUrl("/simpade/auth/login")
  ) {
    return NextResponse.redirect(appUrl("/simpade/auth/login"), 302);
  }
  return NextResponse.next();
}
