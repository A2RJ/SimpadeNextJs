import { NextResponse } from "next/server";
import Auth from "../lib/Auth";

export default async function middleware(request) {
  // const status = await Auth.getUser();
  // if (request.url !== "/login" && status !== 200) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/login";
  //   return NextResponse.rewrite(url);
  // }
}
