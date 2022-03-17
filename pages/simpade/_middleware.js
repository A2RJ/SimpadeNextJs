import { NextResponse } from "next/server";

export default async function middleware(request) {
  // check if current request contains authorization header
  // if not, redirect to login page
//   if (!request.headers.authorization) {
//     const url = request.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.rewrite(url);
//   }
}
