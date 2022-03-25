import { NextResponse } from "next/server";
import Auth from "../lib/Auth";
import { appUrl } from "../lib/config";
import Cookies from "js-cookie";

export default async function middleware(request) {
  if (!Auth.isLogin && request.url !== appUrl("/login")) {
    return NextResponse.redirect(appUrl("/login"), 302);
  }
  return NextResponse.next();
}
