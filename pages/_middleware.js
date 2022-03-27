import Auth from "../lib/Auth";
import { NextResponse } from "next/server";
import { appUrl } from "../lib/config";

export default async function middleware(request) {
  if (!Auth.isLogin && request.url !== appUrl("/login")) {
    return NextResponse.redirect(appUrl("/login"), 302);
  }
  return NextResponse.next();
}
