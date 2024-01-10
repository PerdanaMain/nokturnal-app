import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoginRoute = (pathname:string) => {
  return pathname.startsWith("/dashboard");
  
}

export const middleware = (req: NextRequest)=>{
  // get access_token from cookie
  const token = req.cookies.get("access_token");

  if(token){
    return NextResponse.redirect(new URL("/",req.url));
  }

  
}

export const config = {
  // halaman yg mau apply middleware
  matcher:["/dashboard","/dashboard/:path*",]
}